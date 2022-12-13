import { ChangeEvent } from 'react';
import { Container } from './styles';

interface SearchFormProps {
  numberOfPosts: number;
  onQueryChange: (value: string) => void;
}

export function SearchForm({ numberOfPosts, onQueryChange }: SearchFormProps) {
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    onQueryChange(query);
  }

  return (
    <Container>
      <header>
        <h3>Posts</h3>
        <span>{numberOfPosts} posts</span>
      </header>
      <input type="text" placeholder="Search content" onChange={handleSearch} />
    </Container>
  );
}
