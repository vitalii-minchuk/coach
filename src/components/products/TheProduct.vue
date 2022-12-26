<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>
<script>
import { computed } from 'vue';

export default {
  props: ['name', 'price'],
  // computed: {
  //   info() {
  //     if (this.name && this.price) {
  //       return this.name + ' ' + this.price;
  //     } else {
  //       return '';
  //     }
  //   },
  // },
  setup(props) {
    const info = computed(() => {
      if (props.name && props.price) {
        return props.name + ' ' + props.price;
      } else {
        return '';
      }
    });

    return { info };
  },
};
</script>
<style></style>
