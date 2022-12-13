import { Issue } from '../../../../@types/issue';
import { LinkContainer, Header } from './styles';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  issue: Issue;
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <LinkContainer to={`/posts/${issue.number}`}>
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
