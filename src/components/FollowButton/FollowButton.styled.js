import styled from 'styled-components';

export default styled.button`
  &:hover {
    background: ${props => (props.follow ? `#5CD3A8` : ` #ebd8ff`)};
  }
  background: ${props => (props.follow ? `#5CD3A8` : ` #ebd8ff`)};
`;
