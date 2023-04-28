import { NavContainer } from 'components/UsersList/UsersList.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <NavContainer>
      {' '}
      <button type="button" onClick={onClick}>
        Load More
      </button>
    </NavContainer>
  );
};
