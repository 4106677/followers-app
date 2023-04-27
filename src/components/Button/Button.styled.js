import styled from 'styled-components';

export default styled.button`
  width: 196px;
  height: 50px;

  padding: 14px;

  /* background: #ebd8ff; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;

  background: ${props => (props.follow ? `#5CD3A8` : ` #ebd8ff`)};
`;
