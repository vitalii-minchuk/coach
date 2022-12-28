<template>
  <div class="container">
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section class="list-section">
      <base-frame>
        <div>
          <base-btn @click="fetchCoaches(true)">refresh</base-btn>
          <base-btn v-if="!isAuth" :to="'/auth'" link>login</base-btn>
          <base-btn
            v-if="!this.isCoach && !this.isLoading && this.isAuth"
            link
            :to="'/register'"
            >Register as coach</base-btn
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
        <h3 class="not-found" v-else>No coaches found</h3>
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
    isAuth() {
      return this.$store.getters.isAuth;
    },
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
    fetchCoaches(refresh = false) {
      this.$store.dispatch('coaches/loadCoaches', { refresh });
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

.not-found {
  text-align: center;
  margin-top: 40px;
}
</style>
