import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const counter = {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default counter;
