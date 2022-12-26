export default {
  finalCount(state) {
    return state.count * 2;
  },
  scopedCount(_, getters) {
    const finalCount = +getters.finalCount;
    if (finalCount > 100) {
      return 100;
    }
    if (finalCount < 0) {
      return 0;
    }
    return finalCount;
  },
};
