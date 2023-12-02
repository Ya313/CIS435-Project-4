import React, { useState, useEffect } from 'react';
import './Home.css';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost/projects/Project4Server/index.php', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setSearchResult(data);
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResult(movies);
      setSearchNotFound(false);
    } else {
      const result = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResult(result);
      setSearchNotFound(result.length === 0);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToHome = () => {
    setSelectedMovie(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {selectedMovie ? (
        <div>
          <button onClick={handleBackToHome}>Back to Home</button>
          <h2>{selectedMovie.Title}</h2>
          <img
            src={selectedMovie.ImageURL}
            alt={selectedMovie.Title}
            style={{ width: '200px', height: '300px' }} // Adjust the size as needed
          />
          <p>Age Rating: {selectedMovie.AgeRating}</p>
          <p>Description: {selectedMovie.Summary}</p>
          <p>Audience Rating: {selectedMovie.AudienceRating}</p>
        </div>
      ) : (
        <div>
          <h2>Movie List</h2>
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>

          {searchNotFound && <p>Search not found</p>}

          <ul className="movie-list">
            {searchResult.map((movie) => (
              <li
                key={movie.ID}
                className="movie-item"
                onClick={() => handleMovieClick(movie)}
              >
                <img src={movie.ImageURL} alt={movie.Title} />
                <h3>{movie.Title}</h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
