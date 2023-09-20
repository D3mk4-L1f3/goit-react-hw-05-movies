import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesStyled, Title } from '../component-style/home.styled';
import { fetchGetInfo } from '../api/MovieDatabaseApi';
import { toast } from 'react-toastify';

const Home = () => {
  const location = useLocation();
  const [trendArr, setTrendArr] = useState([]);
  const firstRender = useRef(true);

  useEffect(() => {
    async function fetchTrend() {
      try {
        const response = await fetchGetInfo('trendingIO');
        setTrendArr(response.results);
      } catch (error) {
        toast.error(error.message);
      }
    }

    if (firstRender.current) {
      fetchTrend();
      firstRender.current = false;
    }
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesStyled>
        {trendArr.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </MoviesStyled>
    </div>
  );
};

export default Home;
