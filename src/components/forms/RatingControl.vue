<template>
  <div class="wrapper">
    <button
      class="btn"
      :class="{ active: modelValue === 'poor' }"
      @click="setSelectedRating('poor')"
      type="button"
    >
      poor
    </button>
    <button
      class="btn"
      :class="{ active: modelValue === 'so' }"
      @click="setSelectedRating('so')"
      type="button"
    >
      so so
    </button>
    <button
      class="btn"
      :class="{ active: modelValue === 'grate' }"
      @click="setSelectedRating('grate')"
      type="button"
    >
      great
    </button>
  </div>
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    setSelectedRating(rating) {
      this.$emit('update:modelValue', rating);
    },
  },
};
</script>
<style scoped>
.btn {
  padding: 4px 10px;
  background-color: transparent;
  border: 1px solid transparent;
  transition: all 0.4s;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: #eee;
}

.active {
  color: blue;
  border-bottom: 1px solid blue;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
