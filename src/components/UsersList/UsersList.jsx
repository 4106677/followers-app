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
import Button from '../FollowButton/FollowButton';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/Api';
import { compared } from '../../helpers/compared';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [follow, setFollow] = useState(() => {
    return JSON.parse(localStorage.getItem('follow')) ?? [];
  });

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllUsers(page);

      setUsers(prevUsers => {
        // const newUser = data.map(user => {
        //   // if (follow.includes(user.id)) {
        //   //   return { ...user, isFollow: true };
        //   // }
        //   return { ...user };
        // });

        // console.log(newUser);

        return [...compared(prevUsers, data), ...data];
      });
    };
    fetch();
  }, [page]);

  // const [users, setUsers] = useState(() => {
  //   return JSON.parse(localStorage.getItem('users')) ?? [];
  // });

  // useEffect(() => {
  //   if (!users || users.length === 0) {
  //     getAllUsers()
  //       .then(res => {
  //         setUsers(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err.message);
  //       });
  //   }

  //   window.localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  // useEffect(() => {
  //   getAllUsers(page)
  //     .then(newUsers => {
  //       setUsers(prevState => [...prevState, ...newUsers]);
  //       //
  //       // setUsers(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // }, [page]);

  useEffect(() => {
    // window.localStorage.setItem('users', JSON.stringify(users));
    window.localStorage.setItem('follow', JSON.stringify(follow));
  }, [users, follow]);

  const onHandleFollow = id => {
    follow.includes(id)
      ? setFollow(follow.filter(i => i !== id))
      : setFollow([...follow, id]);

    // if (!subscribe) {
    //   setUsers(
    //     users.map(user =>
    //       user.id === id
    //         ? { ...user, id, followers: followers + 1, subscribe: true }
    //         : user
    //     )
    //   );
    // } else {
    //   setUsers(
    //     users.map(user =>
    //       user.id === id
    //         ? { ...user, id, followers: followers - 1, subscribe: false }
    //         : user
    //     )
    //   );
    // }
  };

  // const onLoadMore = () => {
  //   setPage(page => page + 1);

  //   // await getAllUsers(page)
  //   //   .then(res => {
  //   //     setUsers(users => [...users, ...res.data]);
  //   //     // setUsers(res.data);
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err.message);
  //   //   });
  // };

  // const followChecker = id => {
  //   return follow.includes(id);
  // };

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
                {follow.includes(id)
                  ? (followers + 1)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                &nbsp;Followers
              </p>
              {/* <p>
                {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                &nbsp; Followers
              </p> */}

              <Button
                followList={
                  follow.includes(id)
                  // followList
                }
                id={id}
                onClick={() => {
                  onHandleFollow(id);
                }}
              />
            </Desc>
          </UserCard>
        ))}
      </List>
      <button type="button" onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </>
  );
};

export default UsersList;
