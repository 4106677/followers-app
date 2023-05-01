import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyles';

const Home = lazy(() => import('../../pages/Home/Home'));
const UsersList = lazy(() => import('../UsersList/UsersList'));
const Layout = lazy(() => import('../Layout/Layout'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<UsersList />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
