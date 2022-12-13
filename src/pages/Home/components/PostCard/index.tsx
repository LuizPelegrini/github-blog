import { Issue } from '../../../../@types/issue';
import { LinkContainer, Header } from './styles';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  issue: Issue;
  repo: string;
}

export function PostCard({ issue, repo }: PostCardProps) {
  const searchParams = new URLSearchParams({
    id: String(issue.number),
    user: issue.user.login,
    repo,
  });

  return (
    <LinkContainer
      to={{
        pathname: '/posts',
        search: searchParams.toString(),
      }}
    >
      <Header>
        <h2>{issue.title}</h2>
        <span>
          {formatDistanceToNow(new Date(issue.created_at), { addSuffix: true })}
        </span>
      </Header>
      <p>{issue.body}</p>
    </LinkContainer>
  );
}
