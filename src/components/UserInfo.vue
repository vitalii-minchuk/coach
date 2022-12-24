<template>
  <base-card>
    <template #default>
      <h3>{{ activeUser.name }}</h3>
      <base-badge :badgeType="activeUser.role"></base-badge>
    </template>
    <template #bottom>
      <p>{{ activeUser.description }}</p>
    </template>
  </base-card>
</template>
<script>
export default {
  props: {
    activeUser: {
      type: Object,
    },
  },
};
</script>
