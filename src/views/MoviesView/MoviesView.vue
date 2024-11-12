<template>
  <div>
    <h1>Movies</h1>
    <table v-if="movies.length" class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Release Date</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td>{{ movie.title }}</td>
          <td>{{ movie.director }}</td>
          <td>{{ movie.year }}</td>
          <td>{{ movie.rate }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No movies available</p>
  </div>
</template>
  
  <script>
  import movieService from "@/services/movieService";
  
  export default {
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
  