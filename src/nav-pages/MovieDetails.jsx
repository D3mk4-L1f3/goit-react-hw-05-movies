import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MoviesStyled } from '../component-style/home.styled';
import {
  ButtonBack,
  MovieDetailsSection,
  MovieDetailsStyled,
  MoviePoster,
  TitleName,
} from '../component-style/movieDetails.styled';
import { toast } from 'react-toastify';
import { BsPeople } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';
import { fetchGetInfo } from '../api/MovieDatabaseApi';
import { Loader } from '../components/loader/Loader';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  const movieID = id;
  const isFirstRender = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchGetInfo('detailsIO', '', movieID);
        setMovieDetails(response);
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (isFirstRender.current) {
      fetchDetails();
      isFirstRender.current = false;
    }
  }, [movieID]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <MovieDetailsSection>
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack type="button">Go back</ButtonBack>
      </Link>
      <MovieDetailsStyled>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://fakeimg.pl/300x450?text=No%20Photo'
          }
          alt={original_title}
        />
        <div>
          <TitleName>{original_title}</TitleName>
          <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>
            <i>{overview}</i>
          </p>
          <h3>Genres</h3>
          {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
        </div>
      </MovieDetailsStyled>
      <MoviesStyled>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            <BsPeople style={{ marginRight: '15px' }} />
            Cast ...
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            <VscPreview style={{ marginRight: '15px' }} />
            User reviews ...
          </Link>
        </li>
      </MoviesStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsSection>
  );
};

export default MovieDetails;
