import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  /* align-content: center; */
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  text-align: center;
`;

export const Btn = styled(NavLink)`
  &.active {
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background: #ebd8ff;
  }

  position: fixed;

  z-index: 1;
  bottom: 36px;
  right: 36px;

  background: #5cd3a8;

  height: 50px;

  padding: 14px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
`;

export const UserCard = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  padding: 28px 36px 36px 36px;
  position: relative;
`;

export const HeaderImage = styled.img`
  /* margin: auto; */
`;

export const GoItLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const LineHorisontal = styled.div`
  position: absolute;
  transform: translateX(-36px);
  margin-top: 18px;

  height: 8px;
  width: 100%;
  background: #ebd8ff;
  /* border-bottom: 1px solid #f00; */
`;

export const AvatartWrapper = styled.div`
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);

  width: 80px;
  height: 80px;
  /* background: #ebd8ff; */
  /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff; */
  border: 8px solid;
  border-radius: 50%;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  overflow: hidden;
`;

export const Desc = styled.div`
  margin-top: 88px;
`;
