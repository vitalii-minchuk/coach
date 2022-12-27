<template>
  <form class="form" @submit.prevent="handelSubmit">
    <div
      class="form-control"
      :class="{ invalid: !!firstName.error && firstName.touched }"
    >
      <label for="firstName">First name:</label>
      <input
        id="firstName"
        type="text"
        v-model.trim="firstName.val"
        @blur="setTouched('firstName')"
      />
      <p class="error-text" v-if="firstName.error">
        {{ firstName.error }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !!lastName.error && lastName.touched }"
    >
      <label for="lastName">Last name:</label>
      <input
        id="lastName"
        type="text"
        v-model.trim="lastName.val"
        @blur="setTouched('lastName')"
      />
      <p class="error-text" v-if="lastName.error">
        {{ lastName.error }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !!description.error && description.touched }"
    >
      <label for="description">Description:</label>
      <textarea id="description" rows="4" v-model.trim="description.val" />
      <p class="error-text" v-if="description.error">
        {{ description.error }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !!hourlyRate.error && hourlyRate.touched }"
    >
      <label for="hourlyRate">Hourly rate:</label>
      <input id="hourlyRate" type="number" v-model.number="hourlyRate.val" />
      <p class="error-text" v-if="hourlyRate.error">
        {{ hourlyRate.error }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !!areas.error && areas.touched }"
    >
      <h4>Areas of expertise</h4>
      <div>
        <label for="frontend">Frontend Development</label>
        <input
          id="frontend"
          value="frontend"
          type="checkbox"
          v-model="areas.val"
        />
      </div>
      <div>
        <label for="backend">Backend Development</label>
        <input
          id="backend"
          value="backend"
          type="checkbox"
          v-model="areas.val"
        />
      </div>
      <div>
        <label for="career">Career Advisory</label>
        <input id="career" value="career" type="checkbox" v-model="areas.val" />
      </div>
      <p class="error-text" v-if="areas.error">
        {{ areas.error }}
      </p>
    </div>
    <base-btn type="submit">submit</base-btn>
  </form>
</template>
<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        error: '',
        touched: false,
      },
      lastName: {
        val: '',
        error: '',
        touched: false,
      },
      areas: {
        val: [],
        error: '',
        touched: false,
      },
      description: {
        val: '',
        error: '',
        touched: false,
      },
      hourlyRate: {
        val: null,
        error: '',
        touched: false,
      },
    };
  },
  methods: {
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
      this.setTouched('firstName');
      this.setTouched('lastName');
      this.setTouched('description');
      this.setTouched('hourlyRate');
      if (!this.areas.val.length) {
        console.log('second');
        this.areas.touched = true;
        this.areas.error = 'Please, choose at least one expertise';
      }
    },
    checkErrors() {
      let isValid = true;
      if (this.firstName.error) {
        isValid = false;
      }
      if (this.lastName.error) {
        isValid = false;
      }
      if (this.description.error) {
        isValid = false;
      }
      if (this.areas.error) {
        console.log(this.areas.error);
        isValid = false;
      }
      if (this.hourlyRate.error) {
        isValid = false;
      }
      return isValid;
    },
    handelSubmit() {
      this.checkTouched();

      const isValid = this.checkErrors();

      if (!isValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        areas: this.areas.val,
        description: this.description.val,
        hourlyRate: this.hourlyRate.val,
      };

      this.$emit('save-data', formData);
    },
  },
  watch: {
    'firstName.val': function (value) {
      if (!value) {
        this.setErrors('firstName', 'Field is required');
      } else if (value.length < 2) {
        this.setErrors('firstName', 'First name is too short (min 2)');
      } else if (value.length > 64) {
        this.setErrors('firstName', 'First name is too long (max 64)');
      } else {
        this.setErrors('firstName', '');
      }
    },
    'lastName.val': function (value) {
      if (!value) {
        this.setErrors('lastName', 'Field is required');
      } else if (value.length < 2) {
        this.setErrors('lastName', 'Last name is too short (min 2)');
      } else if (value.length > 64) {
        this.setErrors('lastName', 'Last name is too long (max 64)');
      } else {
        this.setErrors('lastName', '');
      }
    },
    'description.val': function (value) {
      if (!value) {
        this.setErrors('description', 'Field is required');
      } else if (value.length < 20) {
        this.setErrors('description', 'Description is too short (min 20)');
      } else if (value.length > 120) {
        this.setErrors('description', 'Description is too long (max 120)');
      } else {
        this.setErrors('description', '');
      }
    },
    'hourlyRate.val': function (value) {
      if (!value) {
        this.setErrors('hourlyRate', 'Field is required');
      } else if (value < 0) {
        this.setErrors('hourlyRate', 'Rate can not be less than 0');
      } else if (value > 100) {
        this.setErrors('hourlyRate', 'Rate can not be grater than 100');
      } else {
        this.setErrors('hourlyRate', '');
      }
    },
    'areas.val': function (value) {
      if (!value) {
        this.setErrors('areas', 'Please, choose at least one expertise');
      } else {
        this.setErrors('areas', '');
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

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
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
