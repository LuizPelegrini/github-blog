import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <p>
        Made with React and{' '}
        <a
          href="https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28"
          target="_blank"
          rel="noreferrer"
        >
          Github Issues API
        </a>
      </p>
    </Container>
  );
}
