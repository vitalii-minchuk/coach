<template>
  <the-header></the-header>
  <main class="content">
    <badge-list></badge-list>
    <user-info :activeUser="activeUser"></user-info>
    <course-goals #default="slotProps">
      <h5>{{ slotProps.item }}</h5>
      <p>{{ slotProps.dividerLi }}</p>
    </course-goals>
    <base-card>
      <template #top>
        <component :is="selectedComponent"></component>
      </template>
      <template #default>
        <button class="goal-btn" @click="setVisibleGoals('manage-goals')">
          manage goals
        </button>
        <button class="goal-btn" @click="setVisibleGoals('active-goals')">
          active goals
        </button>
      </template>
    </base-card>
  </main>
</template>

<script>
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import TheHeader from './components/layout/TheHeader.vue';
import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Max',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setVisibleGoals(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.goal-btn {
  padding: 2px 10px;
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid plum;
  background-color: transparent;
}
</style>
