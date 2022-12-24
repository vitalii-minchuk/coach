<template>
  <teleport to="#app">
    <div class="overlay"></div>
    <dialog class="dialog" open>
      <slot></slot>
      <div class="actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </dialog>
  </teleport>
</template>
<script>
export default {};
</script>
<style scoped>
.dialog {
  position: fixed;
  top: 20%;
  left: 50%;
  width: 50%;
  height: 100px;
  transform: translateX(-50%);
  padding: 15px;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.actions {
  margin: 15px 0;
  display: flex;
  gap: 15px;
}
</style>
