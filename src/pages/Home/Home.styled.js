import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: auto;
  max-width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  align-items: center;

  padding: 28px 36px 36px 36px;
  box-sizing: border-box;
  text-align: center;

  color: #ebd8ff;
  display: flex;
  flex-direction: column;
`;

export const Btn = styled(NavLink)`
  &.active {
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: #5cd3a8;
  }
  margin-top: 100px;

  background: #ebd8ff;
  color: #373737;

  width: 196px;
  height: 50px;

  padding: 14px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
