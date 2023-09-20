import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainSection,
  Header,
  MenuLink,
} from '../../component-style/layout/layout.styled';
import { Loader } from '../loader/Loader';

export const SharedLayout = () => {
  return (
    <MainSection>
      <Header>
        <nav>
          <MenuLink to="/" end>
            Home
          </MenuLink>
          <MenuLink to="movies">Movies</MenuLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainSection>
  );
};
