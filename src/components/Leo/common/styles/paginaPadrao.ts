import styled from 'styled-components';

export const ButtonPrimary = styled.button<{
  heigth: string;
  width: string;
  color: string;
  background: string;
  border: string;
}>`
  box-sizing: border-box;
  height: ${props => props.heigth};
  width: ${props => props.width};
  border: 1px solid ${props => props.border} !important;
  color: ${props => props.color};
  background-color: ${props => props.background};
`;
export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const SectionPage = styled.div<{ background: string }>`
  position: relative;
  z-index: 1;
  background-color: ${props => props.background};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  .container-contato {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    .container-info-contato {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      color: #ffffff;

      h3,
      p {
        margin: 1rem;
      }
    }
  }

  .container-trabalhe-conosco {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    max-width: 1200px;
    width: 100%;
    margin: auto;
    .swiper-slide {
      margin-right: 0 !important;
      max-width: 400px;
    }
    .swiper-wrapper {
      display: flex;
      width: 400px;
      flex-direction: row;
      max-width: 1380px;
      margin-left: 2rem;
    }
    .slide-depoimento {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      .swiper-pagination-bullet {
        margin: 0.5rem;
      }
    }
    .swiper-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      max-width: 340px;
      max-height: 451px;
      position: relative;
    }
    .depoimento {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      height: 481px;
      width: 316px;
      padding: 1rem;
      color: #ffffff;
    }
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    max-width: 767px;
    width: 100%;
    .swiper-container {
      flex-direction: column;
      align-items: center;
    }
    .container-slider {
      max-width: 767px;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    max-width: 480px;
    width: 100%;
    height: 100%;

    .container-slider {
      max-width: 480px;
      width: 100%;
    }

    .swiper-container {
      flex-direction: column;
      align-items: center;
    }

    .swiper-wrapper {
      flex-direction: row;
      align-items: center;
    }
    .container-trabalhe-conosco {
      flex-direction: column;
      align-items: center;
    }
    .container-contato {
      flex-direction: column;
      align-items: center;
    }
    h1 {
      max-width: 536px;
      width: auto;
    }
  }

  /* Tablet em retrato a paisagem e desktop */
  @media (min-width: 768px) and (max-width: 979px) {
    max-width: 979px;
    width: 100%;

    .container-slider {
      max-width: 979px;
      width: 100%;
    }
  }

  /* Desktop grande */
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const H6 = styled.h6<{ color: string; background: string }>`
  margin-bottom: 1rem;
  color: ${props => props.color};
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 16px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -45px;
    height: 2px;
    width: 40px;
    border-radius: 2.5px;
    background-color: ${props => props.background};
  }
`;

export const P = styled.p<{ color: string }>`
  color: ${props => props.color};
  font-size: 14px;
  letter-spacing: 0.18px;
  line-height: 13px;
  margin-bottom: 1rem;
  width: 70%;
`;
