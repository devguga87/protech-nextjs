import styled from 'styled-components';

export const ContainerCardVaga = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2rem;
  margin: 1rem;
  background-color: #ffffff;
  height: 387px;
  max-width: 353px;
  box-shadow: 0 15px 25px -5px rgba(10, 5, 74, 0.3);

  h1 {
    color: #df542a;
    font-size: 70px;
    font-weight: bold;
    letter-spacing: -0.46px;
    line-height: 70px;
  }
  h3 {
    color: #df542a;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.01px;
    line-height: 13px;
  }
  p {
    color: #df542a;
    font-size: 14px;
    letter-spacing: 0.01px;
    line-height: 16px;
    text-align: justify;
  }
`;
