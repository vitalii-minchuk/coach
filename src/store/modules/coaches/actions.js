export default {
  changeIsLoading(context, payload) {
    context.commit('setLoading', payload.value);
  },
  handleFetchErrors(context, payload) {
    context.commit('setFetchError', payload.value);
  },
  async createNewCoach(context, payload) {
    const userId = context.rootGetters.userId;
    try {
      context.dispatch('changeIsLoading', { value: true });

      const token = context.rootGetters.token;

      const response = await fetch(
        `${
          import.meta.env.VITE_APP_DATABASE_URL
        }/coaches/${userId}.json?auth=${token}`,
        {
          method: 'PUT',
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const error = data.message || 'Something went wrong';
        throw new Error(error);
      }

      context.commit('registerCoach', {
        ...payload,
        id: userId,
      });
    } catch (error) {
      console.log(error.message);
      context.dispatch('handleFetchErrors', { value: error.message });
    } finally {
      context.dispatch('changeIsLoading', { value: false });
    }
  },
  async loadCoaches(context, payload) {
    if (!payload.refresh && !context.getters.shouldTimeStampUpdate) {
      return;
    }

    try {
      context.dispatch('changeIsLoading', { value: true });

      const token = context.rootGetters.token;

      const response = await fetch(
        `${import.meta.env.VITE_APP_DATABASE_URL}/coaches.json?auth=${token}`
      );

      const data = await response.json();

      if (!response.ok) {
        const error = data.message || 'Something went wrong';
        throw new Error(error);
      }
      const coaches = [];

      for (const key in data) {
        const coach = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          areas: data[key].areas,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
        };
        coaches.push(coach);
      }
      context.commit('setCoaches', coaches);
      context.commit('setFetchTimeStamp');
    } catch (error) {
      console.log(error.message);
      context.dispatch('handleFetchErrors', { value: error.message });
    } finally {
      context.dispatch('changeIsLoading', { value: false });
    }
  },
};
