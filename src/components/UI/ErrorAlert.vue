<template>
  <dialog open class="dialog">
    <slot></slot>
  </dialog>
</template>
<script>
export default {};
</script>
<style>
.dialog {
  position: fixed;
  top: 20%;
  left: 50%;
  width: 50%;
  height: 100px;
  transform: translateX(-50%);
  padding: 15px;
}
</style>
