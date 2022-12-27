export default {
  addRequests(state, payload) {
    state.requests = payload;
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setFetchError(state, payload) {
    state.fetchError = payload;
  },
};
