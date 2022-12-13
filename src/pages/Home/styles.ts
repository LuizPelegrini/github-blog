import styled from 'styled-components';

export const PostsGrid = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
`;
