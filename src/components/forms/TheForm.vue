<template>
  <form @submit.prevent="handleSubmit" autocomplete="off">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
      />
      <p v-if="errors.userName" class="error">{{ errors.userName }}</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model.number="userAge" />
      <p v-if="errors.userAge" class="error">{{ errors.userAge }}</p>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blog"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
    </div>
    <div class="form-control">
      <div>
        <input
          id="agree"
          name="agree"
          type="checkbox"
          value="agree"
          v-model="agree"
        />
        <label for="agree">Agree to terms of use</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import { createUser } from '../../services/user';
import RatingControl from './RatingControl.vue';

export default {
  components: { RatingControl },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'wom',
      interest: [],
      how: null,
      rating: 'grate',
      agree: false,
      errors: {
        userName: '',
        userAge: '',
        referrer: '',
        interest: '',
        how: '',
        agree: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      const newUser = {
        userName: this.userName,
        userAge: this.userAge,
        referrer: this.referrer,
        interest: this.interest,
        how: this.how,
        rating: this.rating,
      };

      createUser(newUser);
    },
  },
  watch: {
    userAge(value) {
      if (!value) {
        this.errors.userAge = 'Field is required';
      } else if (value < 0) {
        this.errors.userAge = 'Age can not be less than 0';
      } else if (value > 120) {
        this.errors.userAge = 'Age can not be grater than 120';
      } else {
        this.errors.userAge = '';
      }
    },
    userName(value) {
      if (!value) {
        this.errors.userName = 'Field is required';
      } else if (value.length < 2) {
        this.errors.userName = 'Name is too short';
      } else if (value.length > 64) {
        this.errors.userName = 'Name i too long';
      } else {
        this.errors.userName = '';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.error {
  margin-top: 5px;
  color: brown;
  font-size: 14px;
}
</style>
