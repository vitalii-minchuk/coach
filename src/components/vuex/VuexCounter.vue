<template>
  <base-card v-if="isAuth">
    <h3>Counter</h3>
    <p>{{ $store.state.counter.count }}</p>
    <p>{{ finalCount }}</p>
    <p>{{ scopedCount }}</p>
    <base-btn @click="add_5">+ 5</base-btn>
    <base-btn @click="decr({ value: 5 })">- 5</base-btn>
    <base-btn @click="inc({ value: 10 })">+ 10</base-btn>
  </base-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('counter', ['finalCount', 'scopedCount']),
    isAuth() {
      return this.$store.getters['auth/isUserAuthenticated'];
    },
  },
  methods: {
    ...mapActions({
      inc: 'counter/increase',
      decr: 'counter/decrease',
    }),
    add_5() {
      this.$store.commit('counter/increment', { value: 5 });
    },
    // add_10() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    // remove_5() {
    //   this.$store.dispatch({
    //     type: 'decrease',
    //     value: 5,
    //   });
    // },
  },
};
</script>
<style></style>
