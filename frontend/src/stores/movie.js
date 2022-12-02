import { defineStore } from 'pinia';

export const useMovieStore = defineStore('MovieStore', {
    state: () => ({
        movies: [],     
    }),
    getters: {
       getMovies : (state) =>  state.movies
    },
    actions: {
        addMovie(movie) {
            this.movies.push(movie);
        },
        editMovie(movie, id) {
            console.log(movie,id)
        },
        deleteMovie(movie,id) {
            console.log(movie,id)
        }
    }
})