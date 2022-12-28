<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <h3>
          <router-link to="/">COACH</router-link>
        </h3>
        <nav class="nav">
          <router-link to="/coaches">All coaches</router-link>
          <router-link v-if="isAuth" to="/requests">Requests</router-link>
          <router-link v-else to="/auth">Login</router-link>
          <base-btn mode="delete-btn" v-if="isAuth" @click="logout"
            >Logout</base-btn
          >
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch({
        type: 'logout',
      });
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
.header {
  background-color: rgb(81, 81, 238);
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.5);
  color: #eee;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav {
  display: flex;
  gap: 20px;
}

.router-active-link {
  color: purple;
}
</style>
