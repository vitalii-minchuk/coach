<template>
  <div class="frame-wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.frame-wrapper {
  padding: 10px;
  margin: 0 auto;
  min-width: 300px;
  max-width: 600px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
