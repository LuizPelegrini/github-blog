import { PostCardSkeleton, PostsGrid, NoResultsContainer } from './styles';
import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';
import { ProfileHeader } from './components/ProfileHeader';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Issue } from '../../@types/issue';
import Skeleton from 'react-loading-skeleton';

const { VITE_USER_NAME: USER_NAME, VITE_REPO_NAME: REPO_NAME } = import.meta
  .env;

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [query, setQuery] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  async function fetchIssues(query: string) {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${USER_NAME}/${REPO_NAME} label:published`,
      },
    });

    setIsFetching(false);

    return data.items;
  }

  // sync by fetching issues
  useEffect(() => {
    let ignore = false;

    setIsFetching(true);
    fetchIssues(query).then((issues) => {
      setIsFetching(false);
      if (!ignore) {
        setIssues(issues);
      }
    });

    // to prevent race condition on multiple responses
    return () => {
      ignore = true;
      setIssues([]); // reset list of issues whenever a new query comes in, prevents rendering list if initial request is resolved
    };
  }, [query]);

  function handleSearch(query: string) {
    setQuery(query);
  }

  const generatePostSkeletons = useCallback((numberOfPosts: number) => {
    const skeletons: ReactNode[] = [];

    for (let i = 0; i < numberOfPosts; i++) {
      skeletons.push(
        <PostCardSkeleton key={i}>
          <Skeleton height="100%" containerClassName="post-title-skeleton" />
          <Skeleton count={2} />
        </PostCardSkeleton>,
      );
    }

    return skeletons;
  }, []);

  return (
    <>
      <ProfileHeader />

      <SearchForm numberOfPosts={issues.length} onQueryChange={handleSearch} />

      {isFetching && <PostsGrid>{generatePostSkeletons(4)}</PostsGrid>}

      {!isFetching && issues.length > 0 && (
        <PostsGrid>
          {issues.map((issue) => (
            <PostCard key={issue.id} issue={issue} />
          ))}
        </PostsGrid>
      )}

      {!isFetching && issues.length === 0 && (
        <NoResultsContainer>No posts :(</NoResultsContainer>
      )}
    </>
  );
}
