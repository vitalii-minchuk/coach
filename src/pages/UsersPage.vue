<template>
  <div>users</div>
  <button @click="setOk">ok</button>
</template>
<script>
export default {
  data() {
    return {
      isOk: false,
    };
  },
  methods: {
    setOk() {
      this.isOk = true;
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
<style></style>
