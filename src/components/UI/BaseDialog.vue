<template>
  <teleport to="#app">
    <transition name="backdrop">
      <div v-if="open" class="overlay"></div>
    </transition>
    <transition name="modal">
      <dialog class="dialog" open v-if="open">
        <slot></slot>
        <div class="actions" v-if="$slots.actions">
          <slot name="actions"></slot>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>
<script>
export default {
  props: ['open'],
};
</script>
<style scoped>
.dialog {
  position: fixed;
  top: 20%;
  left: 25%;
  width: 50%;
  height: 100px;
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

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 0.4s ease;
}

.backdrop-enter-to,
.backdrop-leave-from {
  opacity: 1;
}
</style>
