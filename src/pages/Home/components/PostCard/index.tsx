import { LinkContainer, Header } from './styles';

export function PostCard() {
  return (
    <LinkContainer to="/posts">
      <Header>
        <h2>JavaScript data types and data structures</h2>
        <span>1 day ago</span>
      </Header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </LinkContainer>
  );
}
