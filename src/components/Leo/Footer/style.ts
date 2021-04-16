import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  padding: 1rem;
  background-color: #0f3560;
`;
export const ContainerInfosFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  img,
  h3,
  p {
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin: 1rem;
    width: 100%;
    color: #ffffff;

    h3 {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.44px;
      line-height: 24px;
    }

    a {
      text-decoration: none;
      color: #ffffff;
      margin: 0.3rem;
    }

    p {
      text-align: left;
      opacity: 0.5;
      color: #ffffff;
      font-size: 15px;
      letter-spacing: 0;
      line-height: 24px;
    }
  }

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: grey;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
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

export const MenuFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  a {
    text-decoration: none;
    color: #ffffff;
    margin: 1rem;
    font-size: 12px;
    letter-spacing: -0.22px;
    line-height: 15px;
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
  p {
    opacity: 0.5;
    color: #ffffff;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;

    flex-direction: column;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
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
