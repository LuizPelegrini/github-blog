import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { api } from '../../../../lib/axios';

import { Container, Details, Header, Footer, AvatarContainer } from './styles';
import 'react-loading-skeleton/dist/skeleton.css';

import { GithubUser } from '../../../../@types/user';

export function ProfileHeader() {
  const [user, setUser] = useState<GithubUser | null>(null);

  async function fetchUser() {
    const { data } = await api.get<GithubUser>('/users/LuizPelegrini');
    return data;
  }

  useEffect(() => {
    let ignore = false;

    fetchUser().then((user) => {
      if (!ignore) {
        setUser(user);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Container>
      <AvatarContainer className="avatar">
        {!user ? (
          <Skeleton width="100%" height="100%" />
        ) : (
          <img src={user.avatar_url} alt="" />
        )}
      </AvatarContainer>
      <Details>
        <Header>
          {user ? (
            <>
              <h2>{user.name}</h2>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <span>Github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </>
          ) : (
            <Skeleton containerClassName="user-details-skeleton" />
          )}
        </Header>
        <p>{user ? user.bio : <Skeleton />}</p>
        <Footer>
          {user ? (
            <>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers} followers</span>
              </div>
            </>
          ) : (
            <Skeleton count={3} containerClassName="footer-skeleton" />
          )}
        </Footer>
      </Details>
    </Container>
  );
}
