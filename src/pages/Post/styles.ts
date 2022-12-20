import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 10px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
  }
`;

export const Details = styled.div`
  margin-top: 1.25rem;
  h2 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: ${(props) => props.theme.md}) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const Markdown = styled.article`
  padding: 2.5rem 2rem;
  line-height: 1.6;

  p + p {
    margin-top: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  pre {
    overflow: auto;
  }

  @media (max-width: ${(props) => props.theme.md}) {
    padding: 2.5rem 0.5rem;
  }
`;
