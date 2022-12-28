import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const auth = {
  state: () => ({
    isLoading: false,
    fetchError: '',
    userId: null,
    token: null,
    didAutoLogout: false,
  }),
  mutations,
  actions,
  getters,
};

export default auth;
