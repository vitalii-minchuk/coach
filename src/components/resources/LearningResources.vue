<template>
  <li>
    <base-card>
      <div class="top">
        <h4>{{ resource.title }}</h4>
        <base-btn @click="removeResource(resource.id)" :mode="'delete-btn'"
          >delete</base-btn
        >
      </div>
      <p class="content">{{ resource.description }}</p>
      <base-btn :mode="'text-btn'" @click="showHideResourceLink"
        >View Resource</base-btn
      >
      <nav v-if="isResourceLinkShown" class="bottom">
        <a :href="resource.link">{{ resource.link }}</a>
      </nav>
    </base-card>
  </li>
</template>
<script>
export default {
  inject: ['removeResource'],
  props: {
    resource: {
      type: Object,
    },
  },
  data() {
    return {
      isResourceLinkShown: false,
    };
  },
  methods: {
    showHideResourceLink() {
      this.isResourceLinkShown = !this.isResourceLinkShown;
    },
  },
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
}
</style>
