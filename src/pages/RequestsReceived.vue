<template>
  <div class="container">
    <section>
      <base-frame>
        <h3 class="title">Requests received</h3>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="request in requests"
            :key="request.id"
            :request="request"
          ></request-item>
        </ul>
        <h5 v-else class="not-received">
          You have not received any requests yet!
        </h5>
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
import { mapGetters } from 'vuex';
import RequestItem from '../components/request/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    ...mapGetters('requests', [
      'requests',
      'hasRequests',
      'fetchError',
      'isLoading',
    ]),
  },
  methods: {
    loadRequests() {
      this.$store.dispatch('requests/fetchRequests');
    },
    closeFetchErrorDialog() {
      this.$store.dispatch({
        type: 'requests/handleFetchErrors',
        value: '',
      });
    },
  },
  created() {
    this.loadRequests();
  },
};
</script>
<style scoped>
.title {
  margin-bottom: 20px;
}
.not-received {
  margin-top: 40px;
}
</style>
