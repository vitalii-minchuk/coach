<template>
  <div>
    <h2>{{ teamName }}</h2>
    <div>
      <div v-for="user in teamMembers" :key="user.id">
        <h5>{{ user.fullName }}</h5>
        <p>{{ user.role }}</p>
      </div>
    </div>
    <router-link to="/teams/t3">go to team 3</router-link>
  </div>
</template>
<script>
export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      teamMembers: [],
    };
  },
  methods: {
    getTeamInfo(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const selectedMembers = selectedTeam?.members;

      this.users.forEach((user) => {
        if (selectedMembers.includes(user.id)) {
          this.teamMembers.push(user);
        }
      });

      this.teamName = selectedTeam?.name;
    },
  },
  created() {
    this.getTeamInfo(this.teamId);
  },
  watch: {
    teamId(newTeamId) {
      this.teamMembers = [];
      this.getTeamInfo(newTeamId);
    },
  },
};
</script>
<style></style>
