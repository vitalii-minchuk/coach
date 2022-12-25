<template>
  <base-card>
    <form class="form" @submit.prevent="handelSubmit">
      <div>
        <label class="label" for="description">Title:</label>
        <input class="input" id="title" name="title" type="text" ref="title" />
      </div>
      <div>
        <label class="label" for="description">Description:</label>
        <textarea
          class="textarea"
          id="description"
          rows="4"
          ref="description"
        />
      </div>
      <div>
        <label class="label" for="link">Link:</label>
        <input class="input" id="link" name="link" type="url" ref="link" />
      </div>
      <base-btn type="submit">submit</base-btn>
    </form>
  </base-card>
  <base-dialog :open="isInputInvalid">
    <template #default>
      <p>Inputs can not be empty!!!</p>
    </template>
    <template #actions>
      <base-btn @click="closeDialog" :mode="'text-btn'">close</base-btn>
    </template>
  </base-dialog>
</template>
<script>
export default {
  inject: ['addResource', 'switchTab'],
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    handelSubmit() {
      const newResource = {
        id: Date.now(),
        title: this.$refs.title.value.trim(),
        description: this.$refs.description.value.trim(),
        link: this.$refs.link.value.trim(),
      };
      if (newResource.description && newResource.link && newResource.title) {
        this.addResource(newResource);
        this.switchTab();
      } else {
        this.isInputInvalid = true;
      }
    },
    closeDialog() {
      this.isInputInvalid = false;
    },
  },
};
</script>
<style scoped>
.form {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
.input,
.textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
</style>
