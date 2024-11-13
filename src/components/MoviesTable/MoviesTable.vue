<template>
  <table v-if="movies.length" class="table table-bordered table-striped">
    <thead class="thead-dark">
      <tr>
        <th>Title</th>
        <th>Director</th>
        <th>Release Date</th>
        <th>Rate</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="movie in movies" :key="movie.id">
        <td>{{ movie.title }}</td>
        <td>{{ movie.director }}</td>
        <td>{{ movie.year }}</td>
        <td>{{ movie.rate }}</td>
        <td>
          <div>
            <button type="button" class="btn btn-light" @click="toggleEditMovieModal(movie)">Edit</button>
            <button type="button" class="btn btn-danger" @click="toggleConfirmModal(movie)">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No movies available</p>
  <ConfirmModal
    v-show="showConfirmModal"
    @onCancel="toggleConfirmModal"
    @onConfirm="handleConfirmDelete"
  />
  <EditMovieModal
      v-if="showEditMovieModal"
      :movie="selectedMovie"
      @onCancel="toggleShowEditMovieModal"
      @onConfirm="toggleShowEditMovieModal"
      @setMovies="setMovies"
  />
</template>

<script>
import ConfirmModal from '@/components/modals/ConfirmModal/ConfirmModal.vue';
import EditMovieModal from '@/components/modals/EditMovieModal/EditMovieModal.vue';
import movieService from '@/services/movieService';

export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  components: {
    ConfirmModal,
    EditMovieModal,
  },
  data() {
    return {
      showConfirmModal: false,
      showEditMovieModal: false,
      selectedMovie: null,
    };
  },
  methods: {
    toggleConfirmModal(movie) {
      this.selectedMovie = movie;
      this.showConfirmModal = !this.showConfirmModal;
    },
    toggleEditMovieModal(movie) {
      this.selectedMovie = movie;
      this.showEditMovieModal = !this.showEditMovieModal;
    },
    async handleConfirmDelete() {
      const response = await movieService.deleteMovie(this.selectedMovie.id);
      this.$emit('setMovies', response.data);
      this.toggleConfirmModal();
    },
    async handleConfirmUpdate() {
      const response = await movieService.updateMovie(this.selectedMovie);
      this.$emit('setMovies', response.data);
      this.toggleEditMovieModal();
    },
  },
};
</script>
