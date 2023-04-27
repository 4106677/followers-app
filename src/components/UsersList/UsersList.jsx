import {
  AvatartWrapper,
  GoItLogo,
  HeaderImage,
  LineHorisontal,
  List,
  UserAvatar,
  UserCard,
  Desc,
} from './UsersList.styled';
import cardHeader from '../../images/cardHeader.png';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/Api';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const [followList, setFollowList] = useState(() => {
    return JSON.parse(localStorage.getItem('followList')) ?? [];
  });

  useEffect(() => {
    getAllUsers()
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    // window.localStorage.setItem('followList', JSON.stringify(followList));
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onFollow = (id, followers) => {
    if (followList.find(i => i.id === id)) {
      setFollowList(followList.filter(i => i.id !== id));
      console.log(followers);
    } else {
      setFollowList([...followList, { id, followers: followers + 1 }]);
    }
  };

  const onHandleFollow = (id, followers) => {
    // if (users.find(i => i.id !== id)) {
    //   setFollowList(followList.filter(i => i.id !== id));
    //   console.log(followers);
    // } else {
    //   setFollowList([...followList, { id, followers: followers + 1 }]);

    // setUsers([...users, { subscribe: true, followers: followers + 1 }]);
    // }
    setUsers(
      users.map(user =>
        user.id === id
          ? { ...user, id, followers: followers + 1, subscribe: true }
          : user
      )
    );
  };

  return (
    <List>
      {users.map(({ user, tweets, followers, avatar, id, subscribe }) => (
        <UserCard key={id}>
          <HeaderImage src={cardHeader} loading="lazy" alt="Header Title" />
          <GoItLogo src={logo} alt="GoIT" />
          <LineHorisontal>
            <AvatartWrapper>
              <UserAvatar src={avatar} loading="lazy" alt={`${user} avatar`} />
            </AvatartWrapper>
          </LineHorisontal>
          <Desc>
            <p>{tweets} Tweets</p>
            <p>{followers} Followers</p>

            <Button
              followList={subscribe}
              id={id}
              onClick={() => {
                onHandleFollow(id, followers, subscribe);
              }}
            />
          </Desc>
        </UserCard>
      ))}
    </List>
  );
};

export default UsersList;
