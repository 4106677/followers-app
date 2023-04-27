// import { useState } from 'react';

import Btn from './Button.styled';

const Button = ({ followList, id, onClick }) => {
  return (
    <Btn type="button" onClick={onClick} follow={followList}>
      {followList ? 'Following' : 'Follow'}
    </Btn>
  );
};

export default Button;
