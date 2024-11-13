<template>
  <div class="modal fade show" tabindex="-1" role="dialog" :style="{ display: 'block' }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <MovieForm :title="title" @onSubmit="addMovie"></MovieForm>
      </div>
    </div>
  </div>
</template>

<script>
import MovieForm from '@/components/MovieForm/MovieForm.vue';
import movieService from '@/services/movieService';

export default {
  props: {
    onCancel: Function,
    onConfirm: Function,
  },
  components: {
    MovieForm,
  },
  data() {
    return {
      title: 'Add movie',
    };
  },
  methods: {
    cancel() {
      this.$emit('onCancel');
    },
    async addMovie(movie) {
      const response = await movieService.addMovie(movie);
      this.$emit('setMovies', response.data);
      this.$emit('onConfirm');
    },
  },
};
</script>
