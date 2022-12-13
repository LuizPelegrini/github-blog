import { PostsGrid } from './styles';

import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';
import { ProfileHeader } from './components/ProfileHeader';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Issue } from '../../@types/issue';

const USER_NAME = 'LuizPelegrini';
const REPO_NAME = 'github-blog';

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [query, setQuery] = useState('');

  async function fetchIssues(query: string) {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${USER_NAME}/${REPO_NAME}`,
      },
    });

    return data.items;
  }

  useEffect(() => {
    let ignore = false;

    fetchIssues(query).then((issues) => {
      if (!ignore) {
        setIssues(issues);
      }
    });

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
          <PostCard
            key={issue.id}
            id={issue.number}
            title={issue.title}
            date={issue.created_at}
            description={issue.body}
            repo={REPO_NAME}
            user={USER_NAME}
          />
        ))}
      </PostsGrid>
    </>
  );
}
