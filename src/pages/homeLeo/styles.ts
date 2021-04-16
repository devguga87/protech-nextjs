import styled from 'styled-components';

export const ContainerConteudo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: #ffffff;
  width: 100%;
  padding-top: 5rem;

  h1 {
    margin-bottom: 1rem;
    color: #ffffff;
    font-size: 45px;
    font-weight: bold;
    letter-spacing: 1.41px;
    line-height: 50px;
    width: 70%;
  }

  span {
    color: #df542a;
  }

  .container-slider {
    img {
      height: 543px;
      max-width: 632px;
    }
  }

  .conteudo-home {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
  }

  .redes-home {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      right: 25px;
      top: 300px;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      margin-bottom: 1rem;
    }
  }

  .cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .miniCards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .box-tecnologias {
    height: 151px;
    width: 258px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid #ffffff;

    h6 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.01px;
      line-height: 12px;
      margin-bottom: 0.4rem;
      text-transform: uppercase;
    }
  }
  .container-titulo-cases {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }
  .p-processos {
    width: 70%;
  }
  .container-box-tecnologias {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .swiper-container {
    max-width: 1200px;
    margin-top: 5rem;
  }
  .cards-vagas {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  /* Telefone */
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    align-items: center;

    .cards-vagas,
    .container-box-tecnologias,
    .container-titulo-cases,
    .cards,
    .miniCards,
    .conteudo-home {
      flex-direction: column;
      align-items: center;
    }

    .container-slider {
      img {
        height: 200px;
        max-width: 480px;
      }
    }

    h1 {
      width: auto !important;
      font-size: 23px;
    }

    .cards-vagas {
      align-items: center;
    }
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    align-items: center;

    .container-slider {
      img {
        height: 500px;
        max-width: 690px;
      }
    }
    .cards-vagas {
      align-items: center;
    }
  }

  /* Tablet em retrato a paisagem e desktop */
  @media (min-width: 768px) and (max-width: 979px) {
    width: 100%;
    max-width: 100%;
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const ContainerBackground = styled.div`
  background-image: url('/backgroundProtech.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
`;

export const ContainerTrabalheConosco = styled.div``;
