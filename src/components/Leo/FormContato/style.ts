import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
  height: auto;
  label {
    margin-bottom: 0.5rem;
  }
  input {
    height: 40px;
    max-width: 611px;
    background-color: #ffffff;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;

    input {
      width: 100%;
    }
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    width: 100%;
  }

  /* Tablet em retrato a paisagem e desktop */
  @media (min-width: 768px) and (max-width: 979px) {
    width: 100%;
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
