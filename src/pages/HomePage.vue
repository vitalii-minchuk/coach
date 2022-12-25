<template>
  <the-resources></the-resources>
  <the-form></the-form>
  <user-list></user-list>
</template>
<script>
import TheResources from '../components/resources/TheResources.vue';
import TheForm from '../components/forms/TheForm.vue';
import UserList from '../components/user/UserList.vue';

export default {
  components: {
    TheResources,
    TheForm,
    UserList,
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  data() {
    return {
      storedResources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'The official vue.js documentation',
          link: 'https://vuejs.org/',
        },
        {
          id: 2,
          title: 'Google',
          description: 'Ypu have to learn to google',
          link: 'https://google.com/',
        },
      ],
    };
  },
  methods: {
    addResource(newResource) {
      this.storedResources.push(newResource);
    },
    removeResource(id) {
      const resourceIndex = this.storedResources.findIndex(
        (resource) => resource.id === id
      );
      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>
<style></style>
