import React from 'react';

const MovieDetail = ({ movie, handleBackToHome }) => {
  return (
    <div>
      <button onClick={handleBackToHome}>Back to Home</button>
      <h2>{movie.Title}</h2>
      <img
        src={movie.ImageURL}
        alt={movie.Title}
        style={{ width: '200px', height: 'auto' }} // Set a fixed width
      />
      <p>Age Rating: {movie.AgeRating}</p>
      <p>Description: {movie.Summary}</p>
      <p>Audience Rating: {movie.AudienceRating}</p>
    </div>
  );
};

export default MovieDetail;
