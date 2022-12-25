<template>
  <div>{{ team.name }}</div>
  <router-link :to="linkToSingleTeam">details</router-link>
</template>
<script>
export default {
  props: ['team'],
  computed: {
    linkToSingleTeam() {
      return {
        name: 'team-members',
        params: { teamId: this.team.id },
        query: { sort: 'desc' },
      };
    },
  },
};
</script>
<style></style>
