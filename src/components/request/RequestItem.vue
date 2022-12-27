<template>
  <li class="wrapper">
    <base-card>
      <template #top>
        <p>{{ request.message }}</p>
      </template>
      <template #bottom>
        <a :href="userEmailLInk">{{ request.userEmail }}</a>
      </template>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ['request'],
  computed: {
    userEmailLInk() {
      return 'mailto:' + this.request.userEmail;
    },
  },
};
</script>
<style scoped>
.wrapper {
  margin-bottom: 20px;
}
</style>
