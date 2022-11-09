import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fatchMovieCast } from '../api/index';
import { LinkItem, Gallery, GalleryItem } from './List.styled';
import { nanoid } from 'nanoid';

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
      <Gallery>
        {content.map(({ title, name, profile_path }) => {
          return (
            <LinkItem key={nanoid()}>
              {profile_path ? (
                <GalleryItem
                  src={`https://image.tmdb.org/t/p/w500` + profile_path}
                  alt={title ?? name}
                />
              ) : (
                <GalleryItem
                  src={`https://achcity.com/images/photos/medium/article31267.jpg`}
                  alt={title ?? name}
                />
              )}
              <p>{title ?? name}</p>
            </LinkItem>
          );
        })}
      </Gallery>
    </>
  );
};
