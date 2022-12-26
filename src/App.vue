<template>
  <the-header></the-header>
  <main>
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
