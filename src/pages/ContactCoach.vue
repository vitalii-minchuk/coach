<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email:</label>
      <input type="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message:</label>
      <textarea id="message" rows="4" v-model.trim="message" />
    </div>
    <div class="actions">
      <base-btn :disabled="error">Send a message</base-btn>
    </div>
    <p class="errors" v-if="error">{{ error }}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      email: '',
      error: null,
    };
  },
  methods: {
    submitForm() {
      this.error = null;
      if (this.message && this.email) {
        const data = {
          userEmail: this.email,
          message: this.message,
          coachId: this.$route.params.id,
        };
        this.$store.dispatch('requests/contactCoach', data);
        this.$router.push('/coaches');
      } else {
        this.setError('Please enter a valid email and fill the fields');
        setTimeout(() => this.setError(null), 2000);
      }
    },
    setError(value) {
      this.error = value;
    },
  },
};
</script>
<style scoped>
form {
  width: 100%;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  text-align: center;
  margin-top: 20px;
  color: red;
}

.actions {
  text-align: center;
}
</style>
