import styled from 'styled-components';

export const ContainerCard = styled.div<{ color: string; background: string }>`
  padding: 2rem;
  margin: 1rem;
  height: 410px;
  width: 100%;
  max-width: 330px;
  background-color: ${props => props.background};
  box-shadow: 0 6px 18px -2px rgba(0, 0, 0, 0.48);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  img {
    height: 72px;
    max-width: 72px;
    background-color: #df542a;
    margin-bottom: 1rem;
    border-radius: 50%;
  }
  .titulo-card {
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.01px;
    line-height: 13px;
    margin-bottom: 1rem;
    color: ${props => props.color};
    position: relative;
    margin-bottom: 3rem;

    ::before {
      content: '';
      position: absolute;
      bottom: -25px;
      height: 2px;
      max-width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #df542a;
    }
  }
  p {
    color: #ffffff;
    font-size: 13px;
    letter-spacing: 0.01px;
    line-height: 13px;
    color: ${props => props.color};
  }
`;
