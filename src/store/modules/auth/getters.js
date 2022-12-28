export default {
  userId(state) {
    return state.userId;
  },
  isLoading(state) {
    return state.isLoading;
  },
  fetchError(state) {
    return state.fetchError;
  },
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
