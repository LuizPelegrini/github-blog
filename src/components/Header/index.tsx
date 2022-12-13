import { Container } from './styles';

import logoImg from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
    </Container>
  );
}
