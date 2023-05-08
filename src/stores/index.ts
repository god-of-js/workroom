import { defineStore } from 'pinia'
import movies from '@/data/movies'
import Movie from '@/types/Movie'

export const useAppStore = defineStore({
  id: 'AppStore',
  state: () => ({
    movies
  }),
  getters: {
    movie(state) {
      return (movieIndex: string) => {
        return state.movies.find(({ index }) => index === movieIndex)
      }
    }
  },
  actions: {
    updateMovie(updatedMovie: Movie) {
      const oldVersionOfMovie = this.movies.find(({ index }) => index === updatedMovie.index)
      Object.assign(oldVersionOfMovie, updatedMovie)
    }
  }
})
