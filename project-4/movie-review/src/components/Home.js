import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies when the component mounts
    fetch('http://localhost/projects/Project4Server/index.php', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.ID}>
            <h3>{movie.Title}</h3>
            <p>Age Rating: {movie.AgeRating}</p>
            <p>Description: {movie.Summary}</p>
            <p>Audience Rating: {movie.AudienceRating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
