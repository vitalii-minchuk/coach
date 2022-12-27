<template>
  <div class="badge" :class="type">
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: ['title', 'type'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
<style>
.badge {
  background-color: #ccc;
  color: #252525;
  font-size: 12px;
  border-radius: 30px;
  padding: 8px 16px;
  display: inline-block;
  color: white;
}

.frontend {
  background-color: #3d008d;
}

.backend {
  background-color: #71008d;
}

.career {
  background-color: #8d006e;
}
</style>
