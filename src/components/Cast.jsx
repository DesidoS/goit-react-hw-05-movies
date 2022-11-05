import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fatchMovieCast } from '../api/index';
import { LinkItem, Img } from './List.styled';

export const Cast = () => {
  const [content, setContent] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    const loadingContent = async id => {
      const { data } = await fatchMovieCast(id);
      setContent(data.cast);
    };
    loadingContent(movieId);
  }, [movieId]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {content.map(({ id, title, name, profile_path }) => {
          return (
            <>
              <LinkItem key={id}>{title ?? name}</LinkItem>
              {profile_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w500` + profile_path}
                  alt={title ?? name}
                />
              ) : (
                <Img
                  src={`https://achcity.com/images/photos/medium/article31267.jpg`}
                  alt={title ?? name}
                />
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
