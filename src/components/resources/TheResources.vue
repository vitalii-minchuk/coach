<template>
  <base-card>
    <base-btn
      @click="setSelectedResource('add-resource')"
      :mode="addResourceBtnMode"
      >add new resource</base-btn
    >
    <base-btn
      @click="setSelectedResource('resources-list')"
      :mode="resourcesListBtnMode"
      >resources list</base-btn
    >
  </base-card>
  <component :is="selectedResource"></component>
</template>
<script>
import ResourcesList from './ResourcesList.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    ResourcesList,
    AddResource,
  },
  provide() {
    return {
      switchTab: this.switchTab,
    };
  },
  data() {
    return {
      selectedResource: 'resources-list',
    };
  },
  methods: {
    setSelectedResource(res) {
      this.selectedResource = res;
    },
    switchTab() {
      this.selectedResource = 'resources-list';
    },
  },
  computed: {
    addResourceBtnMode() {
      return this.selectedResource === 'add-resource' ? 'selected-btn' : '';
    },
    resourcesListBtnMode() {
      return this.selectedResource === 'resources-list' ? 'selected-btn' : '';
    },
  },
};
</script>
