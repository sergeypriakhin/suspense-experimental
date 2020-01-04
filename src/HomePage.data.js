import { fetchTopMovies } from './api';

export default function prepareHomePage() {
  return {
    movies: fetchTopMovies(),
  }
}