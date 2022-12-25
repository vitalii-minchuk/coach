<template>
  <div>users</div>
  <button @click="setOk">ok</button>
  <base-card>
    <div class="wrapper">
      <div class="block" :class="{ animate: isAnimated }"></div>
      <button @click="animate">move</button>
    </div>
    <base-dialog :open="isDialogOpen">
      <template #default>
        <h3>hello!!!</h3>
      </template>
      <template #actions>
        <base-btn @click="closeDialog" :mode="'text-btn'">close</base-btn>
      </template>
    </base-dialog>
  </base-card>
  <base-card>
    <button @click="toggleParagraph">toggle paragraph</button>
    <transition name="paragraph">
      <p v-if="isParagraphVisible">+------I'm text-----+</p>
    </transition>
  </base-card>
  <div>
    <button @click="openDialog">open</button>
  </div>
  <base-card>
    <transition name="fade-btn" mode="out-in">
      <base-btn v-if="areUsersVisible" @click="showUsers">show</base-btn>
      <base-btn v-else @click="hideUsers">hide</base-btn>
    </transition>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      isOk: false,
      isAnimated: false,
      isDialogOpen: false,
      isParagraphVisible: true,
      areUsersVisible: true,
    };
  },
  methods: {
    setOk() {
      this.isOk = true;
    },
    animate() {
      this.isAnimated = !this.isAnimated;
    },
    openDialog() {
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
    showUsers() {
      this.areUsersVisible = false;
    },
    hideUsers() {
      this.areUsersVisible = true;
    },
  },
  beforeRouteEnter(_, _2, next) {
    console.log('before users enter from component');
    next();
  },
  beforeRouteLeave(_, _2, next) {
    if (this.isOk) {
      next();
    } else {
      const ok = confirm('are you sure?');
      next(ok);
    }
  },
};
</script>
<style scoped>
.wrapper {
  width: 300px;
}
.block {
  width: 60px;
  height: 60px;
  background-color: blue;
}

.animate {
  animation: move 1s ease-in-out;
}

@keyframes move {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0.5;
    transform: translateX(20px) scale(1.3);
  }
  50% {
    border-radius: 50%;
    opacity: 1;
    transform: scale(0.7) translateX(50px);
  }
  70% {
    border-radius: 50%;
    opacity: 0.5;
    transform: scale(1) translateX(70px);
  }
  100% {
    border-radius: none;
    opacity: 1;
    transform: scale(1) translateX(100px);
  }
}

.paragraph-enter-from,
.paragraph-leave-to {
  transform: scale(0.4);
  opacity: 0;
}

.paragraph-enter-active,
.paragraph-leave-active {
  transition: all 0.7s ease;
}
.paragraph-enter-to,
.paragraph-leave-from {
  transform: scale(1);
  opacity: 1;
}
.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}
.fade-btn-enter-active {
  transition: all 0.4s ease-out;
}
.fade-btn-leave-active {
  transition: all 0.4s ease-in;
}
.fade-btn-enter-to,
.fade-btn-leave-from {
  opacity: 1;
}
</style>
