import { LinkContainer, Header } from './styles';

interface PostCardProps {
  title: string;
  date: string;
  description: string;
}

export function PostCard({ title, date, description }: PostCardProps) {
  return (
    <LinkContainer to="/posts">
      <Header>
        <h2>{title}</h2>
        <span>1 day ago</span>
      </Header>
      <p>{description}</p>
    </LinkContainer>
  );
}
