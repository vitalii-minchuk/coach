<template>
  <base-card>
    <template #top>
      <h3>Find your coach</h3>
    </template>
    <template #default>
      <div>
        <label for="frontend">Frontend</label>
        <input id="frontend" type="checkbox" checked @change="setFilters" />
      </div>
      <div>
        <label for="backend">Backend</label>
        <input id="backend" type="checkbox" checked @change="setFilters" />
      </div>
      <div>
        <label for="career">Career</label>
        <input id="career" type="checkbox" checked @change="setFilters" />
      </div>
    </template>
  </base-card>
</template>
<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilters(event) {
      const filterId = event.target.id;
      const isChecked = event.target.checked;
      const updateFilters = {
        ...this.filters,
        [filterId]: isChecked,
      };
      this.filters = updateFilters;
      this.$emit('change-filter', this.filters);
    },
  },
};
</script>
<style scoped></style>
