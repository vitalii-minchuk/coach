<template>
  <div class="container">
    <section>
      <base-card>
        <template #top>
          <h3>
            {{ fullName }}
          </h3>
          <h5>{{ rate }}</h5>
        </template>
      </base-card>
    </section>
    <section>
      <base-card
        ><template #top><h4>Interested? Reach out now?</h4></template>
        <base-btn link :to="contactLink">contact</base-btn>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <template #default>
          <base-badge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          ></base-badge>
        </template>
        <template #bottom>
          <p>{{ description }}</p>
        </template>
      </base-card>
    </section>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    contactLink() {
      return '/coaches/' + this.id + '/contact';
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
};
</script>
<style></style>
