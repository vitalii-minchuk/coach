<template>
  <div class="wrapper">
    <vuex-auth></vuex-auth>
    <vuex-counter></vuex-counter>
  </div>
</template>
<script>
import VuexCounter from './VuexCounter.vue';
import VuexAuth from './VuexAuth.vue';
export default {
  components: {
    VuexCounter,
    VuexAuth,
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}
</style>
