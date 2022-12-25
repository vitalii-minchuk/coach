<template>
  <div>
    <single-team
      v-for="team in teams"
      :key="team.id"
      :team="team"
    ></single-team>
  </div>
</template>
<script>
import SingleTeam from './SingleTeam.vue';
export default {
  components: {
    SingleTeam,
  },
  data() {
    return {};
  },
  inject: ['teams'],
};
</script>
<style></style>
