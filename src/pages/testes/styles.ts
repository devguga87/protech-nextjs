import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  width:100vw;
`;

export const Content = styled.section`
  max-width:1244px;
  margin:0 auto;
  height:100vh;
  background:red;

  display:grid;
  grid-template-columns:1fr 1fr 1fr;

  a  img{
    max-width:100%
  }
`;
