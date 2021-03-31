import styled, {keyframes} from 'styled-components';

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
  height:370px;
  background-color:#CA4820;
  width:100vw;
`;

export const ContentContainer = styled.div`
  max-width:1244px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  padding: 0 3rem;
  div{
    padding-top:147px;
    animation: ${appearFromLeft} 1s;
  }

  nav{
    padding-top:153px;
    color:#FFFFFF;
    height: 22px;
    width: 316px;
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 11px;
    letter-spacing: 0.14px;
    line-height: 20px;
    text-align: right;

  }

  h3{
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom:13px;
    position:relative;

    &:before{
      content:'';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #FFFFFF;
      position: absolute;
      bottom:50%;
      left:-50px;
    }
  }

  h2{
    font-size:40px;
    max-width:650px;
    color:#fff;

    span{
      color:#0F3560
    }
  }

  p{
    max-width: 700px;
    margin-top:26px;
    font-size:14px;
    color:#fff;
    letter-spacing: 0.18px;
    line-height: 22px;
  }

`;

export const WhiteContainer = styled.div`
  width:1500px;
  height:1500px;

`;

export const CasesContainer = styled.div`
  max-width:1244px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-column-gap:10px;
  grid-row-gap:5px;
  margin:-50px 262px ;

  img{
    max-width:500px;
  }

  @media(max-width: 800px) {
    grid-template-columns:1fr;

    img{
      max-width:400px;
    }
  }
`;
