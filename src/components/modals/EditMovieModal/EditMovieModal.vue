<template>
  <div class="modal fade show" tabindex="-1" role="dialog" :style="{ display: 'block' }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <MovieForm :title="title" :selectedMovie="movie" :onSubmit="handleEditMovie"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieForm from '@/components/MovieForm/MovieForm.vue';
import movieService from '@/services/movieService';

const cancel = () => this.$emit('onCancel');

export default {
  props: {
    movie: Object,
    onCancel: Function,
    onConfirm: Function,
  },
  data() {
    return {
      title: 'Edit movie',
    };
  },
  components: {
    MovieForm,
  },
  methods: {
    cancel,
    async handleEditMovie(updatedMovie) {
      console.log('handleEditMovie');
      try {
        const response = await movieService.updateMovie(updatedMovie);
        this.$emit('setMovies', response.data);
        this.$emit('onConfirm');
      } catch (error) {
        console.error('Failed to update movie:', error);
      }
    },
  },
};
</script>
