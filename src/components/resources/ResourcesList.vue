<template>
  <ul class="list">
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    ></learning-resources>
  </ul>
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
<style>
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
