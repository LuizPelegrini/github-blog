import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: flex;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.md}) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  .user-details-skeleton {
    width: 100%;
  }

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

    span {
      margin-right: 0.5rem;
    }
  }
`;

export const Details = styled.div`
  flex: 1;
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

  .footer-skeleton {
    display: flex;
    width: 100%;

    span {
      flex: 1;
    }
  }

  span {
    margin-left: 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.sm}) {
    gap: 1rem;
    margin-top: 1rem;

    justify-content: space-between;
  }
`;
