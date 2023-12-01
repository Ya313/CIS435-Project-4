import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavBar onNavigate={handleNavigation} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'categories' && <MovieList />}
      {currentPage === 'movieDetail' && <MovieDetail />}
    </div>
  );
};

export default App;
