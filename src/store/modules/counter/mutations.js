export default {
  increment(state, payload) {
    state.count = state.count + payload.value;
  },
  decrement(state, payload) {
    state.count = state.count - payload.value;
  },
};
