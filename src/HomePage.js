import React, { Suspense } from 'react';
import MovieList from './MovieList';

function HomePage({ movies }) {
  return (
    <>
      <h1 className="page-title">BEST MOVIES OF 2019</h1>
      <Suspense fallback="Loading...">
        <MovieList movies={movies} />
      </Suspense>
    </>
  );
}

export default HomePage;
