import { LinkContainer, Header } from './styles';

interface PostCardProps {
  id: number;
  title: string;
  user: string;
  repo: string;
  date: string;
  description: string;
}

export function PostCard({
  id,
  title,
  date,
  description,
  user,
  repo,
}: PostCardProps) {
  const searchParams = new URLSearchParams({
    id: String(id),
    user,
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
        <h2>{title}</h2>
        <span>1 day ago</span>
      </Header>
      <p>{description}</p>
    </LinkContainer>
  );
}
