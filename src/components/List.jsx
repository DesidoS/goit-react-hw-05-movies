import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Li, LinkItem } from './List.styled';

export const List = ({ content }) => {
  const location = useLocation();
  return (
    <ul>
      {content.map(({ id, title, name }) => {
        return (
          <Li key={id} to={`/movies/${id}`} state={{ from: location }}>
            <LinkItem>{title ?? name}</LinkItem>
          </Li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
