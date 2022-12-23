<template>
  <li>
    <h5 @click="toggleFavorite(friend.id)">{{ friend.name }} {{ favorite }}</h5>
    <button @click="showHideDetails">
      {{ areDetailsVisible ? "Hide" : "Show" }}
    </button>
    <div v-if="areDetailsVisible">
      <p>{{ friend.age }}</p>
      <p>{{ friend.email }}</p>
    </div>
  </li>
</template>

<script>
export default {
  emits: ["toggle-favorite"],
  props: {
    friend: {
      type: Object,
    },
  },
  data() {
    return {
      areDetailsVisible: false,
    };
  },
  methods: {
    showHideDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
    toggleFavorite(id) {
      this.$emit("toggle-favorite", id);
    },
  },
  computed: {
    favorite() {
      if (this.friend.isFavorite) {
        return " (favorite)";
      }
      return "";
    },
  },
};
</script>

<style></style>
