<template>
  <div>Products</div>
  <p>{{ info }}</p>
  <input v-model="name" type="text" />
  <input v-model="price" type="number" />
  <input ref="descInput" type="text" />
  <button @click="setDesc">ok</button>

  <div>
    <the-product :name="name" :price="price"></the-product>
  </div>
</template>
<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import TheProduct from '../components/products/TheProduct.vue';

const name = ref('');
const price = ref(null);
const desc = ref('');
const descInput = ref(null);

const info = computed(() => {
  if (price.value) {
    return name.value + ' ' + price.value + ' ' + desc.value;
  } else {
    return name.value;
  }
});

onMounted(function () {
  console.log('onMounted');
});

function setDesc() {
  desc.value = descInput.value.value;
}
watch(price, () => {
  if (price.value > 110) {
    price.value = 100;
  }
});
</script>
<style></style>
