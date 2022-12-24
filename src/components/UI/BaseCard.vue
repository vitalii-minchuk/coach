<template>
  <div class="card-wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card-wrapper {
  padding: 20px;
  margin: 0 auto;
  max-width: 500px;
  border: 1px solid teal;
  border-radius: 8px;
  box-shadow: 3px 3px 7px gray;
}
</style>
