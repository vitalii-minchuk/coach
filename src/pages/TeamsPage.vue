<template>
  <button @click="goBackHome">back</button>
  <!-- <router-view></router-view> -->
  <teams-list></teams-list>
</template>
<script>
import TeamsList from '../components/teams/TeamsList.vue';
export default {
  components: {
    TeamsList,
  },
  methods: {
    goBackHome() {
      this.$router.push('/');
    },
  },
};
</script>
<style></style>
