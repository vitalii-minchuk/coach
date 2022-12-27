export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setFetchError(state, payload) {
    state.fetchError = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetch = new Date().getTime();
  },
  setCoaches(state, payload) {
    console.log(state);
    state.coaches = payload;
  },
};
