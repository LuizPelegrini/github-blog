import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
  ProfileContainer,
  ProfileDetails,
  ProfileHeader,
  PostsGrid,
  Footer,
} from './styles';

import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';

export function Home() {
  return (
    <>
      <ProfileContainer>
        <img src="https://github.com/LuizPelegrini.png" alt="" />
        <ProfileDetails>
          <ProfileHeader>
            <h2>Cameron Williamson</h2>
            <a
              href="https://github.com/LuizPelegrini"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <Footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 followers</span>
            </div>
          </Footer>
        </ProfileDetails>
      </ProfileContainer>

      <SearchForm />

      <PostsGrid>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsGrid>
    </>
  );
}
