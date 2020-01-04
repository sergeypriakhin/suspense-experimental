import React, { Suspense } from 'react';
import MovieReviews from './MovieReviews';

function MoviePage({ movieDetail, movieReviews }) {
  const movie = movieDetail.read();

  if (movie === undefined) 
    return <h1 className="page-title">Ooops... film not found</h1>

  return (
    <>
      <h1 className="page-title">{movie.title}</h1>
      <p className="page-text">{movie.info}</p>
      <h2 className="page-title">Critic reviews for <i>{movie.title}</i></h2>
      <Suspense fallback="Loading reviews...">
        <MovieReviews reviews={movieReviews} />
      </Suspense>
    </>
  );
}

export default MoviePage;
