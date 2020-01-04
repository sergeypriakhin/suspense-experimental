import { fetchMovieDetails, fetchMovieReviews } from './api';

export default function prepareMoviePage({ movieId }) {
  const movieDetail = fetchMovieDetails(movieId);
  const movieReviews = fetchMovieReviews(movieId);
  
  return {
    movieDetail,
    movieReviews,
  };
}