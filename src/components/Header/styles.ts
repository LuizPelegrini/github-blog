import styled from 'styled-components';
import coverImg from '../../assets/cover.png';

export const Container = styled.header`
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 4rem 0 8.375rem;

  a {
    border: 0;

    &:hover {
      border: 0;
    }
  }
`;
