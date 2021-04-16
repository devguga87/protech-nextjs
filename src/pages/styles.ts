import styled, { keyframes } from 'styled-components';
import { Swiper } from 'swiper/react';

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-80px);
  }
  to{
    opacity:1;
    transform: translateX(0);
  }
`;

export const OrangeContainer = styled.div`
  height: 800px;
  width: 100vw;
  padding: 0 2rem;
  background-image: url('/backgroundProtech.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

export const ContentContainer = styled.div`
  position: relative;
  max-width: 1244px;
  margin: 0 auto;
  padding: 0 3rem;
  height: 100%;

  div {
    animation: ${appearFromLeft} 1s;
    padding-top: 220px;
  }

  nav {
    padding-top: 80px;
    color: #ffffff;
    height: 22px;
    width: 316px;
    color: #ffffff;
    font-size: 11px;
    letter-spacing: 0.14px;
    line-height: 20px;
    text-align: right;

    a.active {
      font-weight: 600;
    }
  }

  h3 {
    color: #ffffff;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom: 13px;
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #ffffff;
      position: absolute;
      bottom: 50%;
      left: -50px;
    }
  }

  h2 {
    font-size: 40px;
    max-width: 650px;
    width: 100%;
    color: #fff;

    span {
      color: #0f3560;
    }
  }

  p {
    max-width: 700px;
    margin-top: 26px;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.18px;
    line-height: 22px;
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

export const NavArrow = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 3rem;
  img {
    right: 0;
    top: 120px;
    align-items: right;
    height: 20px;
    width: 31px;
    margin-top: 80;
  }
`;

export const GrayContainer = styled.div`
  height: 637px; /*era 600px*/
  background-color: #e8ebf1;
  width: 100vw;
`;

export const WorkContent = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding-top: 128px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    color: #0f3560;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom: 14px;
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #ca4820;
      position: absolute;
      bottom: 50%;
      left: -50px;
    }
  }

  h2 {
    font-size: 40px;
    max-width: 650px;
    color: #0f3560;
    margin-bottom: 19px;

    span {
      color: #ca4820;
    }
  }

  p {
    max-width: 898px;
    color: #0f3560;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }

  button {
    height: 48px;
    width: 247px;
    border: 1px solid #df542a;
    background-color: #df542a;
    color: #ffffff;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 13px;
    text-align: center;
    margin-top: 48px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const ServiceCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 26px;
`;

export const OrangeContainer2 = styled.div`
  height: 960px;
  background-color: #ca4820;
  width: 100vw;
  padding: 0 2rem;
`;

export const WorkContent2 = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding-top: 270px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    color: #fff;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom: 14px;
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #fff;
      position: absolute;
      bottom: 50%;
      left: -50px;
    }
  }

  h2 {
    font-size: 40px;
    max-width: 650px;
    color: #0f3560;
    margin-bottom: 19px;

    span {
      color: #fff;
    }
  }

  p {
    max-width: 898px;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }

  button {
    height: 48px;
    width: 247px;
    border: 1px solid #df542a;
    background-color: #df542a;
    color: #ffffff;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 13px;
    text-align: center;
    margin-top: 48px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  > p {
    margin-top: 28px;
  }
`;

export const MiniCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 10px;
  margin-top: 26px;
`;

export const CardTecnologiasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const WhiteContainer = styled.div`
  height: 800px;
  background-color: #ffffff;
  width: 100vw;
  position: relative;
`;

export const InstContent = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding-top: 150px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    color: #0f3560;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom: 14px;
    position: relative;

    &:before {
      content: '';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #ca4820;
      position: absolute;
      bottom: 50%;
      left: -50px;
    }
  }

  h2 {
    font-size: 40px;
    max-width: 650px;
    width: 100%;
    color: #0f3560;
    margin-bottom: 19px;

    span {
      color: #ca4820;
    }
  }

  p {
    height: 59px;
    max-width: 898px;
    width: 100%;
    color: #0f3560;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #6086b4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledSwiper = styled(Swiper)`
  max-width: 1700px;
  margin-left: 20px;
  img {
    box-sizing: border-box;
    width: 600px;
    max-height: 600px;
    margin-top: 41px;
  }
`;

export const Depoimento = styled.div`
  img {
    margin-top: -90px;
  }
`;
