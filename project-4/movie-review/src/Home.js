import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/projects/CIS435-Project-4/project-4/server/index.php', {
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
        <div className="movie-details-container">
          <button className="back-to-home-button" onClick={handleBackToHome}>
            Back to Home
          </button>
          <div className="movie-details-content">
            <img
              src={selectedMovie.ImageURL}
              alt={selectedMovie.Title}
              className="movie-details-image"
            />
            <div className="movie-details-info">
              <h2>{selectedMovie.Title}</h2>
              <p>Age Rating: {selectedMovie.AgeRating}</p>
              <p>Audience Rating: {selectedMovie.AudienceRating}</p>
            </div>
          </div>
          <p className="movie-summary">{selectedMovie.Summary}</p>
        </div>
      ) : (
        <div>
          <h2>Movie List</h2>
          <input
            className="search-for-movie-input"
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-for-movie" onClick={handleSearch}>Search</button>

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
