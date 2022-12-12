import { PostsGrid } from './styles';

import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';
import { ProfileHeader } from './components/ProfileHeader';

export function Home() {
  return (
    <>
      <ProfileHeader />

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
