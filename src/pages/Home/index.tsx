import { PostsGrid } from './styles';

import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';
import { ProfileHeader } from './components/ProfileHeader';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Issue } from '../../@types/issue';

const { VITE_USER_NAME: USER_NAME, VITE_REPO_NAME: REPO_NAME } = import.meta
  .env;

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [query, setQuery] = useState('');

  async function fetchIssues(query: string) {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${USER_NAME}/${REPO_NAME} label:published`,
      },
    });

    return data.items;
  }

  // sync by fetching issues
  useEffect(() => {
    let ignore = false;

    fetchIssues(query).then((issues) => {
      if (!ignore) {
        setIssues(issues);
      }
    });

    // to prevent race condition on multiple responses
    return () => {
      ignore = true;
    };
  }, [query]);

  function handleSearch(query: string) {
    if (query.length > 3) {
      setQuery(query);
    } else if (query.length === 0) {
      setQuery('');
    }
  }

  return (
    <>
      <ProfileHeader />

      <SearchForm numberOfPosts={issues.length} onQueryChange={handleSearch} />

      <PostsGrid>
        {issues.map((issue) => (
          <PostCard key={issue.id} issue={issue} />
        ))}
      </PostsGrid>
    </>
  );
}
