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
