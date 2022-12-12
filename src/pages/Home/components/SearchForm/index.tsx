import { Container } from './styles';

export function SearchForm() {
  return (
    <Container>
      <header>
        <h3>Posts</h3>
        <span>6 posts</span>
      </header>
      <form>
        <input type="text" placeholder="Search content" />
      </form>
    </Container>
  );
}
