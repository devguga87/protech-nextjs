import styled from 'styled-components';

interface ContainerProps {
  background?: string;
  backgroundImage?: string;
}

export const Container = styled.div<ContainerProps>`
  height: 97px;
  width: 100vw;
  position: fixed;
  background: ${props => props.background};
  background-image: url(${props => props.backgroundImage});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const HeaderContainer = styled.header<{ color: 'string' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1244px;
  margin: 0 auto;
  padding: 0 2rem;
  nav a {
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.2px;
    /* color:#0F3560; */
    color: ${props => props.color};
    font-weight: 600;
    display: inline-block; /* novo*/
    height: 2rem; /* novo*/
    transition: filter 0.2s;
    & + a {
      margin-left: 26px;
    }
    &:hover {
      filter: opacity(0.7);
    }

    &.active {
      font-weight: 800;
      border-bottom: 2px solid #df542a;
      border-radius: 1px;

      &:hover {
        filter: opacity(1);
      }
    }
  }
  nav button {
    background-color: transparent;
    height: 37.85px;
    width: 147px;
    border: 1px solid #df542a;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 13px;
    text-align: center;
    color: #df542a;
    margin-left: 15px; /*ver*/
    &:hover {
      filter: opacity(0.7);
    }
  }
  nav span {
    margin-left: 10px;
    color: ${props => props.color};
    font-family: Montserrat;
    font-size: 11px;
    letter-spacing: -0.2px;
    line-height: 14px;

    &.active {
      font-weight: 700;
      color: #df542a;
    }
  }

  @media (max-width: 430px) {
    nav a {
      display: none;
    }
  }

  a.disabled {
    color: #d0d0d0;
    pointer-events: none;
  }

  div {
    display: inline-block;
    margin-left: 16px;
    height: 25px;
    transform: translateY(30%);
    width: 0.5px;
    background: #979797;
  }
`;
