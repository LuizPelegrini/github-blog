import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    margin-top: 0.75rem;

    input[type='text'] {
      width: 100%;
      background-color: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-border']};
      padding: 1rem 0.75rem;
      border-radius: 6px;
      color: ${(props) => props.theme['base-text']};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`;