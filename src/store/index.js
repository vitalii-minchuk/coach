import { createStore } from 'vuex';
import counter from './modules/counter';
import auth from './modules/auth';

const store = createStore({
  modules: {
    counter,
    auth,
  },
});

export default store;
