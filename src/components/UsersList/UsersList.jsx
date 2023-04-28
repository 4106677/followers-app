import {
  AvatartWrapper,
  GoItLogo,
  LineHorisontal,
  List,
  UserAvatar,
  UserCard,
  Desc,
  Btn,
  NavContainer,
} from './UsersList.styled';
import cardHeader from '../../images/cardHeader.png';
import logo from '../../images/logo.svg';
import Button from '../FollowButton/FollowButton';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/Api';
import { compared } from '../../helpers/compared';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { matchMedia } from 'helpers/matchMedia';
import { Dropdown } from 'components/Filter/Filter';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(() => {
    return JSON.parse(localStorage.getItem('filter')) ?? 'all';
  });
  const [follow, setFollow] = useState(() => {
    return JSON.parse(localStorage.getItem('follow')) ?? [];
  });

  const limit = matchMedia();

  useEffect(() => {
    const fetch = async () => {
      const data = await getUsers(page, limit);

      setIsMore((await getUsers()) / limit <= page);
      setUsers(prevUsers => {
        return [...compared(prevUsers, data), ...data];
      });
    };
    fetch();
  }, [page, limit]);

  useEffect(() => {
    window.localStorage.setItem('follow', JSON.stringify(follow));
    window.localStorage.setItem('users', JSON.stringify(users));
    window.localStorage.setItem('filter', JSON.stringify(filter));
  }, [users, follow, filter]);

  const onHandleFollow = id => {
    follow.includes(id)
      ? setFollow(follow.filter(i => i !== id))
      : setFollow([...follow, id]);
  };

  return (
    <>
      <NavContainer>
        <Btn to={'/'}>To Home</Btn>
        <Dropdown setFilter={setFilter} def={filter} />
      </NavContainer>

      <List>
        {users.map(({ user, tweets, followers, avatar, id }) => (
          <UserCard key={id}>
            <img src={cardHeader} loading="lazy" alt="Header Title" />
            <GoItLogo src={logo} alt="GoIT" />
            <LineHorisontal>
              <AvatartWrapper>
                <UserAvatar
                  src={avatar}
                  loading="lazy"
                  alt={`${user} avatar`}
                />
              </AvatartWrapper>
            </LineHorisontal>
            <Desc>
              <p>{tweets}&nbsp;Tweets</p>
              <p>
                {follow.includes(id)
                  ? (followers + 1)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                &nbsp;Followers
              </p>
              <Button
                followList={follow.includes(id)}
                id={id}
                onClick={() => {
                  onHandleFollow(id);
                }}
              />
            </Desc>
          </UserCard>
        ))}
      </List>

      {!isMore && <LoadMore onClick={() => setPage(page + 1)} />}
    </>
  );
};

export default UsersList;
