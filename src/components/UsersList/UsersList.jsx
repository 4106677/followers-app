import {
  AvatartWrapper,
  GoItLogo,
  HeaderImage,
  LineHorisontal,
  List,
  UserAvatar,
  UserCard,
  Desc,
  Btn,
} from './UsersList.styled';
import cardHeader from '../../images/cardHeader.png';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/Api';

const UsersList = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) ?? [];
  });

  useEffect(() => {
    if (!users || users.length === 0) {
      getAllUsers()
        .then(res => {
          setUsers(res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onHandleFollow = (id, followers, subscribe) => {
    if (!subscribe) {
      setUsers(
        users.map(user =>
          user.id === id
            ? { ...user, id, followers: followers + 1, subscribe: true }
            : user
        )
      );
    } else {
      setUsers(
        users.map(user =>
          user.id === id
            ? { ...user, id, followers: followers - 1, subscribe: false }
            : user
        )
      );
    }
  };

  return (
    <>
      <Btn to={'/'}>To Home</Btn>
      <List>
        {users.map(({ user, tweets, followers, avatar, id, subscribe }) => (
          <UserCard key={id}>
            <HeaderImage src={cardHeader} loading="lazy" alt="Header Title" />
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
                {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                &nbsp; Followers
              </p>

              <Button
                followList={
                  subscribe
                  // followList
                }
                id={id}
                onClick={() => {
                  onHandleFollow(id, followers, subscribe);
                }}
              />
            </Desc>
          </UserCard>
        ))}
      </List>
    </>
  );
};

export default UsersList;
