<template>
  <div>
    <div>
      <h1>Movies</h1>
      <button type="button" class="btn btn-dark" @click="toggleShowAddMovieModal">+</button>
    </div>
    <MoviesTable :movies="movies" />
    <AddMovieModal
      v-if="showAddMovieModal"
      @onCancel="toggleShowAddMovieModal"
      @onConfirm="toggleShowAddMovieModal"
    />
  </div>
</template>

<script>
import AddMovieModal from '@/components/modals/AddMovieModal/AddMovieModal.vue'
import MoviesTable from '@/components/MoviesTable/MoviesTable.vue'
import movieService from '@/services/movieService'

export default {
  components: {
    MoviesTable,
    AddMovieModal,
  },
  data() {
    return {
      movies: [],
      showAddMovieModal: false,
    }
  },
  methods: {
    async getMovies() {
      try {
        const response = await movieService.getMovies()
        this.movies = response.data
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    toggleShowAddMovieModal() {
      this.showAddMovieModal = !this.showAddMovieModal
    },
  },
  mounted() {
    this.getMovies()
  },
}
</script>
