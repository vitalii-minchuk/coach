<template>
  <base-card>
    <h3>Auth</h3>
    <div>
      <base-btn @click="logout" v-if="isAuth">logout</base-btn>
      <base-btn @click="login" v-else>login</base-btn>
    </div>
  </base-card>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    isAuth() {
      return this.$store.getters['auth/isUserAuthenticated'];
    },
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
  },
};
</script>
