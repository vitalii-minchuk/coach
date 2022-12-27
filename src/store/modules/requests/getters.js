export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests.length > 0;
  },
  isLoading(state) {
    return state.isLoading;
  },
  fetchError(state) {
    return state.fetchError;
  },
};
