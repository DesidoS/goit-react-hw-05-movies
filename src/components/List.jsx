import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Li, LinkItem, Gallery, GalleryItem } from './List.styled';
import { nanoid } from 'nanoid';

export const List = ({ content }) => {
  const location = useLocation();
  return (
    <>
      <Gallery>
        {content.map(({ id, title, name, poster_path, overview }) => (
          <Li key={nanoid()} to={`/movies/${id}`} state={{ from: location }}>
            <LinkItem>
              <GalleryItem
                src={`https://image.tmdb.org/t/p/w500` + poster_path}
                alt={overview}
              />
              <p>{title ?? name}</p>
            </LinkItem>
          </Li>
        ))}
      </Gallery>
    </>
  );
};

List.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
