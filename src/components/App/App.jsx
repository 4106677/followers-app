import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from './GlobalStyles';

const Home = lazy(() => import('../../pages/Home/Home'));
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const MovieDetail = lazy(() => import('../../pages/MovieDetail/MovieDetail'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Home />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route />
          </Route> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
