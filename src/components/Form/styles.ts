import styled from 'styled-components';

interface InputProps {
  isActive: boolean;
}

export const Container = styled.form`
  max-width: 656px;
  margin-top: 1rem;
  label {
    color: #ffffff;
    font-size: 0.8rem;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    margin-top: 0.3rem;

    &:hover {
      border-color: gray;
    }

    &.textarea {
      height: 100px;
    }
  }

  textarea {
    margin-top: 0.5rem;
    display: block;
    width: 100%;
    height: 120px;
    padding: 16px;
  }

  button {
    margin-top: 20px;
  }

  p {
    margin-top: 14px;
    max-width: 597px;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 0.18px;
    line-height: 13px;
    font-weight: 400;
  }

  button {
    margin-top: 8px;
    border: 0;
  }
`;

export const Input = styled.input<InputProps>`
  border-color: ${props => props.isActive && 'blue'};
`;
