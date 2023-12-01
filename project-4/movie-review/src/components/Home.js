import React, { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);

  useEffect(() => {
    // Fetch all movies when the component mounts
    fetch('http://localhost/projects/Project4Server/index.php', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setSearchResult(data); // Set searchResult to all movies initially
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []); // Empty dependency array to run the effect only once on mount

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If search term is empty, show all movies
      setSearchResult(movies);
      setSearchNotFound(false);
    } else {
      // Filter movies based on the search term
      const result = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResult(result);
      setSearchNotFound(result.length === 0);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchNotFound && <p>Search not found</p>}

      <ul>
        {searchResult.map((movie) => (
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
