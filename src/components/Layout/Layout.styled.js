import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;

  /* border: 1px solid red; */

  padding: 10px;
`;

export const A = styled(NavLink)`
  &.active {
    color: white;
    background-color: blueviolet;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blueviolet;
  }

  color: black;

  border-radius: 5px;
  font-weight: 600;
  font-size: 22px;

  padding: 10px 20px;

  margin-right: 20px;
`;
