import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    line-height: 1.3;
  }

  a {
    margin-left: auto;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0;
    padding: 0.375rem 0;
    border-bottom: 1px solid transparent;
    transition: border 0.15s;

    span {
      margin-right: 0.5rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.6;
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  gap: 1.5rem;

  span {
    margin-left: 0.5rem;
  }
`;
