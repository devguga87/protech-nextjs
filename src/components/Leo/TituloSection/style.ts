import styled from 'styled-components';

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  .titulo-processos {
    width: 100%;
  }
  .section-processo {
    color: #0f3560;
  }

  @media (max-width: 480px) {
    align-items: center;
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
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
