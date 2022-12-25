<template>
  <transition-group name="users-list" tag="ul" class="list">
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    ></learning-resources>
  </transition-group>
</template>
<script>
import LearningResources from './LearningResources.vue';
export default {
  components: {
    LearningResources,
  },
  inject: ['resources'],
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.users-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.users-list-leave-active {
  transition: all 0.6s ease-out;
}

.users-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
