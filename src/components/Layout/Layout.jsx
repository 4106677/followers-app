import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
