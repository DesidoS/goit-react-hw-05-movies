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
  padding: 10px;
`;

export const Img = styled.img`
  // margin: 10px 20px 0 0;
  height: 160px;
`;
