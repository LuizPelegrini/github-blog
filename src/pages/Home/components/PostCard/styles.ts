import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkContainer = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.15s;

  p {
    margin-top: 1.25rem;
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    flex-shrink: 0;
  }
`;
