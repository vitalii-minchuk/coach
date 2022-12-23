<template>
  <form @submit.prevent="handelSubmit">
    <label>
      Name:
      <input v-model="name" type="text" />
    </label>
    <label>
      Age:
      <input v-model="age" type="number" />
    </label>
    <label>
      Email:
      <input v-model="email" type="email" />
    </label>
    <button type="submit">ok</button>
  </form>
</template>
<script>
export default {
  emits: ["make-friend"],
  data() {
    return {
      name: "",
      email: "",
      age: null,
    };
  },
  methods: {
    handelSubmit() {
      const newFriend = {
        name: this.name,
        age: this.age,
        email: this.email,
      };
      this.$emit("make-friend", newFriend);
    },
  },
};
</script>
<style></style>
