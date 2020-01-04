import React from 'react';
import './MovieReviews.css';

function MovieReviews({ reviews }) {
  const reviewsList = reviews.read();

  return (
    <ul className="MovieReviews">
      {reviewsList.map(({ id, text, name }) => (
         <ReviewsItem key={id} text={text} name={name}  />
      ))}
    </ul>
  );
}

function ReviewsItem({ name, text }) {
  return (
    <li className="MovieReviews__item">
      <div className="MovieReviews__text">{text}</div>
      <div className="MovieReviews__name">{name}</div>
    </li>
  );
}

export default MovieReviews;
