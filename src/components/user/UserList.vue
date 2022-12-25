<template>
  <base-card>
    <div class="wrapper">
      <h3>Users List</h3>
      <user-data v-for="user in users" :key="user.id" :user="user"></user-data>
    </div>
  </base-card>
</template>
<script>
import UserData from './UserData.vue';
import { getUsers } from '../../services/user';

export default {
  components: {
    UserData,
  },
  data() {
    return {
      users: null,
    };
  },
  methods: {
    async fetchUsers() {
      this.users = await getUsers();
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 500px;
}
</style>
