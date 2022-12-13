import { PostsGrid } from './styles';

import { SearchForm } from './components/SearchForm';
import { PostCard } from './components/PostCard';
import { ProfileHeader } from './components/ProfileHeader';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchIssues() {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `Boas praticas repo:LuizPelegrini/github-blog`,
      },
    });

    return data.items;
  }

  useEffect(() => {
    let ignore = false;

    fetchIssues().then((issues) => {
      if (!ignore) {
        setIssues(issues);
        console.log(issues);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <ProfileHeader />

      <SearchForm />

      <PostsGrid>
        {issues.map((issue) => (
          <PostCard
            key={issue.id}
            title={issue.title}
            date={issue.created_at}
            description={issue.body}
          />
        ))}
      </PostsGrid>
    </>
  );
}
