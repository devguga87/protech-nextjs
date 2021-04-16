import styled, { keyframes } from 'styled-components';

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
  background-color: #ca4820;
  width: 100vw;
  padding: 0 2rem;
`;

export const ContentContainer = styled.div`
  position: relative;
  max-width: 1244px;
  margin: 0 auto;
  padding: 0 3rem;
  height: 100%;
  > div {
    display: flex;
    justify-content: space-between;

    div {
      animation: ${appearFromLeft} 1s;
    }
  }

  div {
    padding-top: 120px;
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

export const WhiteContainer = styled.div`
  height: 816px;
  background-color: #ffffff;
  width: 100vw;
`;

export const InstContent = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding-top: 100px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    color: #0f3560;
    font-family: Montserrat;
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
      background-color: #0f3560;
      position: absolute;
      bottom: 50%;
      left: -50px;
    }
  }

  h2 {
    font-size: 40px;
    max-width: 650px;
    width: 100%;
    color: #ca4820;
    margin-bottom: 19px;

    span {
      color: #0f3560;
    }
  }

  p {
    height: 59px;
    max-width: 898px;
    width: 100%;
    color: #0f3560;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    box-sizing: border-box;
    margin-top: 150px;
    width: 100%;
    max-height: 300px;
  }
`;

export const GrayContainer = styled.div`
  height: 600px;
  background-color: #e8ebf1;
  width: 100vw;
`;

export const WorkContent = styled.div`
  max-width: 1244px;
  margin: 0 auto;
  padding-top: 143px;
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
      background-color: #0f3560;
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
    height: 59px;
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
