<template>
  <the-header></the-header>
  <main class="main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </main>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$router.replace('/');
      }
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style: none;
}

.main {
  margin: 40px 0;
}

.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
