import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fatchMovieReviews } from '../api/index';

export const Reviews = () => {
  const [content, setContent] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    const loadingContent = async id => {
      const { data } = await fatchMovieReviews(id);
      if (data.results.length === 0) {
        setContent('No review');
        return;
      }
      setContent(data.results[0].content);
    };
    loadingContent(movieId);
  }, [movieId]);

  if (content.length === 0) return;

  return (
    <>
      <h1>Reviews</h1>
      <p>{content}</p>
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
