import styled from 'styled-components';

export const WhiteContainer = styled.div`
  max-width:100vw;
  max-height:4450px;
  margin:0 auto;

`;

export const CasesContainer = styled.div`
  max-width:1244px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;

  margin:0 auto;

  > div{
    display: flex;
  }

  img{
    max-width:846px;
    margin-top:-76px;
    margin-left:180px;
    &+img{
      margin-top:20px;
    }
  }

  h2{
    color: #4A4A4A;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.17px;
    line-height: 27px;
    font-weight:600;
    margin-top:30px;
  }
  p{
    width: 290px;
    color: #6D6E71;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.17px;
    line-height: 25px;
  }

  a{
    color: #DF542A;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.17px;
    line-height: 27px
  }
`;

export const NavFooter = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:40px 0;

  a:hover {
    filter:opacity(0.6);
  }

  a span{
    margin:20px;
    color: #000000;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.17px;
    line-height: 27px;


  }

  a img{
    margin:0;
  }

`;

export const StyledNavButton = styled.a<{left?:string, right?:string}>`
  position:absolute;
  height: 80px;
  width: 27px;
  background:#E88263;
  margin-top:170px;
  border:0;
  left:${props => props.left} ;
  right:${props => props.right};
  transition:filter 0.2s;
  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
    filter:brightness(0.8)
  }
`
