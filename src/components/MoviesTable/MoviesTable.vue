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
            <button type="button" class="btn btn-light">Edit</button>
            <button type="button" class="btn btn-danger" @click="toggleConfirmModal(movie.id)">
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
    @onConfirm="handleConfirm"
  />
</template>

<script>
import ConfirmModal from '@/components/modals/ConfirmModal/ConfirmModal.vue'
import movieService from '@/services/movieService'

export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  components: {
    ConfirmModal,
  },
  data() {
    return {
      showConfirmModal: false,
      selectedMovieId: null,
    }
  },
  methods: {
    toggleConfirmModal(movieId = null) {
      this.selectedMovieId = movieId
      this.showConfirmModal = !this.showConfirmModal
    },
    async handleConfirm() {
      await movieService.deleteMovie(this.selectedMovieId)
      this.toggleConfirmModal()
    },
  },
}
</script>
