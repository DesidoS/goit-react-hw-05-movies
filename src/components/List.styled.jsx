import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: tomato;
  }
`;
export const LinkItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 11fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

/*
 * Стили компонента ImageGalleryItem
 */
export const GalleryItem = styled.img`
  width: 240px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  object-fit: cover;

`;
