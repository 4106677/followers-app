import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from './GlobalStyles';

const Home = lazy(() => import('../../pages/Home/Home'));
const UsersList = lazy(() => import('../UsersList/UsersList'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<UsersList />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
