import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

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
  margin: 10px 20px 0 0;
  height: 320px;
`;
