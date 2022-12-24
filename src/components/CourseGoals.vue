<template>
  <base-card>
    <template #top>
      <ul>
        <li v-for="goal in goals" :key="goal">
          <slot :item="goal" divider-li="..."></slot>
        </li>
      </ul>
    </template>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      goals: ['finish the course', 'learn vue'],
    };
  },
};
</script>
