export default {
  createNewCoach(context, payload) {
    context.commit('registerCoach', {
      ...payload,
      id: context.rootGetters.coachId,
    });
  },
};
