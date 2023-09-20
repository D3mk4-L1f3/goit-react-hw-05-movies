import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  ReviewBC,
  ReviewList,
} from '../../component-style/review/review.styled';
import { fetchGetInfo } from '../../api/MovieDatabaseApi';

const Reviews = () => {
  const { id } = useParams();
  const movieID = id;

  const [reviews, setReviews] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (!isFirstRender.current) return;

        const response = await fetchGetInfo('reviewsIO', '', movieID);
        setReviews(response.results);
        isFirstRender.current = false;
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchReviews();
  }, [movieID]);

  return (
    <ReviewList>
      {!!reviews.length ? (
        reviews.map((review, index) => (
          <li key={`${review.author}_${index}`}>
            <h4>{review.author}</h4>
            <ReviewBC>
              <p>{review.content}</p>
            </ReviewBC>
          </li>
        ))
      ) : (
        <p>We have no reviews available.</p>
      )}
    </ReviewList>
  );
};

export default Reviews;
