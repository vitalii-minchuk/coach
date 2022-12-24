<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="checkError">ok</button>
  <teleport to="#app">
    <error-alert v-if="!isInputValid">
      <div class="content-box">
        <h4>Invalid input</h4>
        <p>Please enter something into input field</p>
        <button @click="confirmError">close</button>
      </div>
    </error-alert>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      isInputValid: true,
    };
  },
  methods: {
    checkError() {
      const enteredValue = this.$refs.goal.value;
      if (!enteredValue) {
        this.isInputValid = false;
      }
    },
    confirmError() {
      this.isInputValid = true;
    },
  },
};
</script>

<style>
.content-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
