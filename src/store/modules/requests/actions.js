export default {
  changeIsLoading(context, payload) {
    context.commit('setLoading', payload.value);
  },
  handleFetchErrors(context, payload) {
    context.commit('setFetchError', payload.value);
  },
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.userEmail,
      message: payload.message,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_DATABASE_URL}/requests/${
          payload.coachId
        }.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const error = data.message || 'Something went wrong';
        throw new Error(error);
      }
    } catch (error) {
      console.log(error.message);
      context.dispatch('handleFetchErrors', { value: error.message });
    }
  },
  async fetchRequests(context) {
    const userId = context.rootGetters.coachId;
    try {
      context.dispatch('changeIsLoading', { value: true });
      const response = await fetch(
        `${import.meta.env.VITE_APP_DATABASE_URL}/requests/${userId}.json`
      );

      const data = await response.json();

      if (!response.ok) {
        const error = data.message || 'Something went wrong';
        throw new Error(error);
      }
      const requests = [];

      for (const key in data) {
        const request = {
          id: key,
          userEmail: data[key].userEmail,
          message: data[key].message,
        };
        requests.push(request);
      }
      console.log(requests);
      context.commit('addRequests', requests);
    } catch (error) {
      console.log(error.message);
      context.dispatch('handleFetchErrors', { value: error.message });
    } finally {
      context.dispatch('changeIsLoading', { value: false });
    }
  },
};
