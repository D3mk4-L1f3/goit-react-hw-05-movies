import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from '../components/searchbar/Searchbar';
import { Message } from '../component-style/movieDetails.styled';
import { MoviesStyled } from 'component-style/home.styled';
import { fetchGetInfo } from '../api/MovieDatabaseApi';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) return;

        const { results } = await fetchGetInfo('searchIO', query);
        setMoviesArr(results);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const updateQueryString = newQuery => {
    const nextQuery = newQuery !== '' ? { q: newQuery } : {};
    setSearchParams(nextQuery);
  };

  return (
    <div>
      <Searchbar value={query} onChange={updateQueryString} />
      {!!moviesArr.length ? (
        <MoviesStyled>
          {moviesArr.map(movie => (
            <li key={movie.id}>
              <Link to={`./${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </MoviesStyled>
      ) : !!query ? (
        <Message>No movies match your query!</Message>
      ) : (
        <Message>Try to search your favorite movie :)</Message>
      )}
    </div>
  );
};

export default Movies;
