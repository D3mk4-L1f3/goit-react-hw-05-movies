import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout/layout';

const Home = lazy(() => import('../nav-pages/Home'));
const Movies = lazy(() => import('../nav-pages/Movies'));
const MovieDetails = lazy(() => import('../nav-pages/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./review/Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
