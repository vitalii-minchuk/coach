export default {
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setFetchError(state, payload) {
    state.fetchError = payload;
  },
  setUser(state, payload) {
    state.userId = payload.localId;
    state.token = payload.idToken;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
