<template>
  <the-header></the-header>
  <main class="content">
    <!-- <router-view></router-view> -->
    <router-view v-slot="{ Component, route }">
      <transition name="routing" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      users: [
        {
          id: 'u1',
          fullName: 'Max',
          role: 'Engineer',
        },
        {
          id: 'u2',
          fullName: 'Den',
          role: 'Engineer',
        },
        {
          id: 'u3',
          fullName: 'Net',
          role: 'Engineer',
        },
        {
          id: 'u4',
          fullName: 'Mary',
          role: 'Consultant',
        },
        {
          id: 'u5',
          fullName: 'Sophy',
          role: 'Consultant',
        },
      ],
      teams: [
        {
          id: 't1',
          name: 'Frontend Engineers',
          members: ['u1', 'u2'],
        },
        {
          id: 't2',
          name: 'Backend Engineers',
          members: ['u1', 'u2', 'u3'],
        },
        {
          id: 't3',
          name: 'Client Consulting',
          members: ['u4', 'u5'],
        },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 630px;
  padding: 0 15px;
  margin: 20px auto;
}

.routing-enter-from,
.routing-leave-to {
  opacity: 0;
}

.routing-enter-active,
.routing-leave-active {
  transition: all 0.8s ease;
}

.routing-enter-to,
.routing-leave-from {
  opacity: 1;
}
</style>
