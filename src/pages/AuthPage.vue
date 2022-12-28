<template>
  <div class="container">
    <section>
      <base-frame>
        <form @submit.prevent="submitForm" autocomplete="off">
          <div
            class="form-control"
            :class="{ invalid: !!email.error && email.touched }"
          >
            <label for="email">Your email:</label>
            <input
              id="email"
              type="email"
              v-model.trim="email.val"
              @blur="setTouched('email')"
            />
            <p class="error-text" v-if="email.error">
              {{ email.error }}
            </p>
          </div>
          <div
            class="form-control"
            :class="{ invalid: !!password.error && password.touched }"
          >
            <label for="password">Your password:</label>
            <input
              id="password"
              type="password"
              v-model.trim="password.val"
              @blur="setTouched('password')"
            />
            <p class="error-text" v-if="password.error">
              {{ password.error }}
            </p>
          </div>
          <div>
            <base-btn type="submit">{{ submitBtnCaption }}</base-btn>
            <base-btn @click="switchMode" type="button" mode="text-btn">{{
              switchModeBtnCaption
            }}</base-btn>
          </div>
        </form>
      </base-frame>
    </section>
    <base-dialog :show="isLoading" fixed :title="'Loading ...'">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog
      :show="!!fetchError"
      @close="closeFetchErrorDialog"
      :title="'Fetching Error'"
    >
      <p>{{ fetchError }}</p>
    </base-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      email: {
        val: '',
        error: '',
        touched: false,
      },
      password: {
        val: '',
        error: '',
        touched: false,
      },
      mode: 'login',
    };
  },
  computed: {
    ...mapGetters(['isLoading', 'fetchError']),
    submitBtnCaption() {
      return this.mode === 'login' ? 'login' : 'sign up';
    },
    switchModeBtnCaption() {
      return this.mode === 'login' ? 'sign up instead' : 'login instead';
    },
  },
  methods: {
    closeFetchErrorDialog() {
      this.$store.dispatch({
        type: 'handleFetchErrors',
        value: '',
      });
    },
    setErrors(field, message) {
      this[field].error = message;
    },
    setTouched(field) {
      this[field].touched = true;
      if (!this[field].val) {
        this.setErrors(field, 'Field is required');
      }
    },
    checkTouched() {
      this.setTouched('email');
      this.setTouched('password');
    },
    checkErrors() {
      let isValid = true;
      if (this.email.error) {
        isValid = false;
      }
      if (this.password.error) {
        isValid = false;
      }
      return isValid;
    },
    submitForm() {
      this.checkTouched();

      const isValid = this.checkErrors();

      if (!isValid) {
        return;
      }

      const formData = {
        email: this.email.val,
        password: this.password.val,
      };

      if (this.mode === 'login') {
        this.$store.dispatch('login', formData);
        this.$router.replace('/coaches');
      } else {
        this.$store.dispatch('signup', formData);
        this.$router.replace('/coaches');
      }
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'sign up';
      } else {
        this.mode = 'login';
      }
    },
  },
  watch: {
    'email.val': function (value) {
      if (!value) {
        this.setErrors('email', 'Field is required');
      } else {
        this.setErrors('email', '');
      }
    },
    'password.val': function (value) {
      if (!value) {
        this.setErrors('password', 'Field is required');
      } else if (value.length < 6) {
        this.setErrors('password', 'Password is too short (min 6)');
      } else if (value.length > 64) {
        this.setErrors('password', 'Password is too long (max 64)');
      } else {
        this.setErrors('password', '');
      }
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.error-text {
  color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
