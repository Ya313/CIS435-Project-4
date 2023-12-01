import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Additional logic for searching movies
  };

  return (
    <div>
      <NavBar onNavigate={handleNavigation} />
      <SearchBar onSearch={handleSearch} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'categories' && <MovieList />}
      {currentPage === 'movieDetail' && <MovieDetail />}
    </div>
  );
};

export default App;
