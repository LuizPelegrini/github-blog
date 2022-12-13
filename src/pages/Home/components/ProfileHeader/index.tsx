import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { api } from '../../../../lib/axios';

import { Container, Details, Header, Footer } from './styles';

interface GithubUser {
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  login: string;
  html_url: string;
  followers: number;
}

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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <img src={user.avatar_url} alt="" />
      <Details>
        <Header>
          <h2>{user.name}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>
        <p>{user.bio}</p>
        <Footer>
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
        </Footer>
      </Details>
    </Container>
  );
}
