<template>
  <base-card>
    <template #top>
      <h4>Available badges</h4>
    </template>
    <template #default>
      <div v-for="badgeType in badgeTypes" :key="badgeType">
        <base-badge :badgeType="badgeType"></base-badge>
      </div>
    </template>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      badgeTypes: ["admin", "author"],
    };
  },
};
</script>
