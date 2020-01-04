import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList({ movies }) {
  const history = useHistory();
  const movieList = movies.read();

  const handleClick = (movieId) => () => {
    history.push(`/movie/${movieId}`);
  }

  return (
    <ul className="MovieList">
      {movieList.map(({ id, title }) => (
         <MovieItem key={id} title={title} onClick={handleClick(id)} />
      ))}
    </ul>
  );
}

function MovieItem({ title, onClick }) {
  return (
    <li className="MovieList__item" onClick={onClick}>
      <div className="MovieList__title">{title}</div>
      <div className="MovieList__next">➙</div>
    </li>
  );
}

export default MovieList;
