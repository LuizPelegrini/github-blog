import styled from 'styled-components';

export const PostsGrid = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.md}) {
    grid-template-columns: 1fr;
  }
`;

export const PostCardSkeleton = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  border: 0;

  .post-title-skeleton {
    width: 50%;
    display: block;
    margin-bottom: 1rem;
    height: 1.5rem;
  }
`;

export const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 20rem;
`;
