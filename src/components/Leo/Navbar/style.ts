import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #0f3560;
  width: 100%;
  padding: 1rem;
`;

export const BackgroundNavbar = styled.div`
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

export const ContainerNavbarConteudo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  font-weight: bold;

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #ffffff;
      margin-right: 2rem;
      font-size: 11px;
      letter-spacing: -0.2px;
      line-height: 14px;
      position: relative;
      :hover::before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #df542a;
        position: absolute;
        bottom: -10px;
      }
      :active::before {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #df542a;
        position: absolute;
        bottom: -10px;
      }
    }
    button {
      margin-right: 1rem;
      color: #df542a;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  img {
    height: 53px;
    width: 209px;
  }

  svg {
    display: none;
  }

  /* Telefones em paisagem e abaixo */
  @media (max-width: 480px) {
    .links {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        a {
          margin: 0.5rem;
        }
      }
      button {
        margin-right: 0;
        margin: 0.5rem;
      }
    }
    .links.active {
      background-color: #0f3560;
      color: #fff;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 999999;
    }

    svg {
      display: flex;
      color: #ffffff;
    }
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    .links {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        a {
          margin: 0.5rem;
        }
      }
      button {
        margin-right: 0;
        margin: 0.5rem;
      }
    }
    .links.active {
      background-color: #0f3560;
      color: #fff;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 999999;
    }

    svg {
      display: flex;
      color: #ffffff;
    }
  }

  /* Tablet em retrato a paisagem e desktop */
  @media (min-width: 768px) and (max-width: 979px) {
    /* estilos aqui */
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    /* estilos aqui */
  }
`;
