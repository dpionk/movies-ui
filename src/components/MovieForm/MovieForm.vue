<template>
  <h3>{{ title }}</h3>
  <form>
    <div class="form-group" :class="{ error: v$.movie.title.$errors.length }">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        aria-describedby="emailHelp"
        v-model="movie.title"
        @blur="$v.movie.title.$touch()"
      />
      <small
        v-if="v$.movie.title.$invalid && v$.movie.title.$dirty"
        id="title-error"
        class="form-text text-muted"
      >
        <div v-for="(error, index) in v$.movie.title.$errors" :key="index">
          {{ error.$message }}
        </div>
      </small>
    </div>
    <div class="form-group">
      <label for="director">Director</label>
      <input type="text" class="form-control" id="director" v-model="movie.director" />
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input type="number" class="form-control" id="year" v-model="movie.year" />
    </div>
    <small
      v-if="v$.movie.year.$invalid && v$.movie.year.$dirty"
      id="year-error"
      class="form-text text-muted"
    >
      <div v-for="(error, index) in v$.movie.year.$errors" :key="index">
        {{ error.$message }}
      </div>
    </small>
    <div class="form-group">
      <label for="rate">Rate</label>
      <input type="number" class="form-control" id="rate" v-model="movie.rate" />
    </div>
  </form>
  <button type="submit" class="btn btn-primary" @click="submitForm">Submit</button>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, maxLength, between, helpers } from '@vuelidate/validators';

export default {
  props: {
    title: String,
    selectedMovie: Object,
    onSubmit: Function,
  },
  data() {
    return {
      v$: useVuelidate(),
      movie: this.selectedMovie ? JSON.parse(JSON.stringify(this.selectedMovie)) : {
        title: null,
        director: null,
        year: null,
        rate: 0,
      },
    };
  },
  validations() {
    return {
      movie: {
        title: {
          required: helpers.withMessage('Title is required', required),
          maxLength: maxLength(200),
          $autoDirty: true,
        },
        year: { between: between(1900, 2200), $autoDirty: true },
      },
    };
  },
  methods: {
    async submitForm() {
      //   await this.$v.$validate()
      //   if (!this.$v.$invalid) {
      console.log(this);
      this.$emit('onSubmit', (this.movie));
      //   }
    },
  },
};
</script>

<style scoped></style>
