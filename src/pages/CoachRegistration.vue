<template>
  <div class="container">
    <section>
      <base-frame>
        <coach-form @save-data="saveData"></coach-form>
      </base-frame>
    </section>
  </div>
</template>
<script>
import CoachForm from '../components/coach/CoachForm.vue';

export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/createNewCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style></style>
