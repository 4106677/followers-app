import styled from 'styled-components';

export const Select = styled.select`
  outline: none;
  appearance: none;
  height: 50px;

  text-align: center;
  padding: 14px;
  background: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  transition: 0.3s border-color;

  font-family: 'Montserrat';
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
`;

export const Drop = styled.div`
  transform: rotateX(90);
  /* margin-left: auto; */
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
`;
