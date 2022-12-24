<template>
  <div class="badge" :class="{ admin: isAdmin }">
    {{ badgeType }}
  </div>
</template>
<script>
export default {
  props: {
    badgeType: {
      type: String,
    },
  },
  computed: {
    isAdmin() {
      return this.badgeType === "admin";
    },
  },
};
</script>
<style scoped>
.badge {
  padding: 5px 20px;
  border-radius: 40px;
  background-color: rgb(167, 104, 227);
}
.admin {
  background-color: rgb(138, 218, 131);
}
</style>
