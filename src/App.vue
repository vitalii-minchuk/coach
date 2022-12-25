<template>
  <the-header></the-header>
  <main class="content">
    <the-resources></the-resources>
    <the-form></the-form>
    <user-list></user-list>
  </main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/resources/TheResources.vue';
import TheForm from './components/forms/TheForm.vue';
import UserList from './components/user/UserList.vue';

export default {
  components: {
    TheHeader,
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 630px;
  padding: 0 15px;
  margin: 20px auto;
}
</style>
