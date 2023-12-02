import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MovieDetail from './components/MovieDetail';
import './components/Home.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="film-score-title">FilmScore</h1>
      <NavBar onNavigate={handleNavigation} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <AboutUs />}
      {currentPage === 'movieDetail' && <MovieDetail />}
    </div>
  );
};

export default App;
