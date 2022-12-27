<template>
  <div class="container">
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section class="list-section">
      <base-frame>
        <div>
          <base-btn>refresh</base-btn>
          <router-link v-if="!isCoach && !isLoading" to="/register"
            >Register as coach</router-link
          >
        </div>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul class="list-box" v-else-if="hasCoaches && !isLoading">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :coach="coach"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-frame>
    </section>
    <base-dialog
      :show="!!fetchError"
      @close="closeFetchErrorDialog"
      :title="'Fetching Error'"
    >
      <p>{{ fetchError }}</p>
    </base-dialog>
  </div>
</template>
<script>
import CoachItem from '../components/coach/CoachItem.vue';
import CoachFilter from '../components/coach/CoachFilter.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  computed: {
    ...mapGetters('coaches', [
      'isCoach',
      'hasCoaches',
      'isLoading',
      'fetchError',
    ]),
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      const filteredCoaches = coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
      return filteredCoaches;
    },
  },
  methods: {
    setFilter(filters) {
      this.activeFilters = filters;
    },
    closeFetchErrorDialog() {
      this.$store.dispatch({
        type: 'coaches/handleFetchErrors',
        value: '',
      });
    },
    fetchCoaches() {
      this.$store.dispatch('coaches/loadCoaches');
    },
  },
  created() {
    this.fetchCoaches();
  },
};
</script>
<style scoped>
.list-box {
  margin: 40px 0;
}

.list-section {
  margin: 30px 0;
}
</style>
