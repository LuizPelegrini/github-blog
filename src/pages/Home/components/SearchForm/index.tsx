import { Container } from './styles';

interface SearchFormProps {
  numberOfPosts: number;
}

export function SearchForm({ numberOfPosts }: SearchFormProps) {
  return (
    <Container>
      <header>
        <h3>Posts</h3>
        <span>{numberOfPosts} posts</span>
      </header>
      <input type="text" placeholder="Search content" />
    </Container>
  );
}
