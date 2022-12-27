<template>
  <li class="wrapper">
    <base-card>
      <template #top>
        <h3>{{ fullName }}</h3>
      </template>
      <template #default>
        <ul class="badge-box">
          <base-badge
            v-for="area in coach.areas"
            :key="area"
            :title="area"
            :type="area"
          ></base-badge>
        </ul>
      </template>
      <template #bottom>
        <base-btn link :to="coachContactLink">contact</base-btn>
        <base-btn link :to="coachDetailsLink">view details</base-btn>
      </template>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ['coach'],
  computed: {
    fullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
    coachContactLink() {
      return '/coaches/' + this.coach.id + '/contact';
    },
    coachDetailsLink() {
      return '/coaches/' + this.coach.id;
    },
  },
};
</script>
<style scoped>
.wrapper {
  margin-bottom: 20px;
}

.badge-box {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
