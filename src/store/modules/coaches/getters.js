export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const coachId = rootGetters.coachId;

    return coaches.some((coach) => coach.id === coachId);
  },
  isLoading(state) {
    return state.isLoading;
  },
  fetchError(state) {
    return state.fetchError;
  },
  shouldTimeStampUpdate(state) {
    const lastFetch = state.lastFetch;

    if (!lastFetch) {
      return true;
    }

    const currentTimeStamp = new Date().getTime();

    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
