import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from '../../component-style/cast/cast.styled';
import { MoviePoster } from '../../component-style/movieDetails.styled';
import { fetchGetInfo } from '../../api/MovieDatabaseApi';
import { toast } from 'react-toastify';

const Cast = () => {
  const { id } = useParams();
  const movieID = id;

  const [cast, setCast] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        if (!isFirstRender.current) return;

        const response = await fetchGetInfo('castIO', '', movieID);
        setCast(response.cast);
        isFirstRender.current = false;
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchCast();
  }, [movieID]);

  return (
    <CastList>
      {cast.map((actor, index) => (
        <li key={`${actor.id}_${actor.name}_${index}`}>
          <MoviePoster
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://fakeimg.pl/200x300?text=No%20Photo'
            }
            alt={`Photo of ${actor.name}`}
          />
          <p>
            <b>{actor.name}</b>
          </p>
          <p>
            <i>{actor.character}</i>
          </p>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
