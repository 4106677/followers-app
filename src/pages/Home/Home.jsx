// import MoviesList from 'pages/MoviesList/MoviesList';
// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import { getAllUsers } from 'services/Api';
// import UsersList from '../../components/UsersList/UsersList';
import { Btn, Container } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Wellcome to tweets app</h1>
      {/* {error && <p>{error.message}</p>} */}
      {/* <UsersList /> */}

      {/* {movies?.length > 0 && <MoviesList movies={movies} location={location} />} */}
      <Btn to={'tweets'}>To Tweets</Btn>
    </Container>
  );
};

export default Home;
