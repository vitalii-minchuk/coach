export default {
  increase(context, payload) {
    context.commit('increment', payload);
  },
  decrease(context, payload) {
    setTimeout(() => {
      context.commit('decrement', payload);
    }, 1000);
  },
};
