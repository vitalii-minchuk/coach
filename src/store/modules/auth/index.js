import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const auth = {
  namespaced: true,
  state: () => ({ isAuth: false }),
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default auth;
