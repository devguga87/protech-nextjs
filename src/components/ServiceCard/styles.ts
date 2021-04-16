import styled from 'styled-components';

export const Container = styled.div<{ background: 'string'; color: 'string' }>`
  /* background: #0f3560; */
  background: ${props => props.background};
  max-width: 400px;
  box-shadow: 0 6px 18px -2px rgba(0, 0, 0, 0.48);
  padding: 2rem 2rem;

  img {
    margin-bottom: 38px;
  }
  h4 {
    color: ${props => props.color};
    margin-bottom: 22px;
  }

  div {
    width: 40px;
    height: 2px;
    background: #df542a;
    margin-bottom: 25px;
  }

  p {
    color: ${props => props.color};
    font-size: 13px;
    letter-spacing: 0.01px;
    margin-bottom: 20px;
    height: 20px;
  }
`;
