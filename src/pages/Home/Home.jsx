// import MoviesList from 'pages/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import { getAllUsers } from 'services/Api';
import UsersList from '../../components/UsersList/UsersList';

const Home = () => {
  return (
    <main>
      {/* <h1 style={{ textAlign: 'center' }}>Trending today</h1> */}
      {/* {error && <p>{error.message}</p>} */}
      <UsersList />
      {/* {movies?.length > 0 && <MoviesList movies={movies} location={location} />} */}
    </main>
  );
};

export default Home;
