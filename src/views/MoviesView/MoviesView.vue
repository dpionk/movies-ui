<template>
  <div>
    <div>
      <h1>Movies</h1>
      <button type="button" class="btn btn-dark">+</button>
    </div>
    <MoviesTable :movies="movies"/>
  </div>
</template>
  
  <script>
import MoviesTable from "@/components/MoviesTable/MoviesTable.vue";
import movieService from "@/services/movieService";
  
  export default {
    components: {
    MoviesTable
    },
    data() {
      return {
        movies: []
      };
    },
    methods: {
      async getMovies() {
        try {
          const response = await movieService.getMovies();
          this.movies = response.data;
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
    },
    mounted() {
      this.getMovies();
    }
  };
  </script>
  