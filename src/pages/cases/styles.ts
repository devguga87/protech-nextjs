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

    span{
      margin-left:5px;
    }

    a{
      margin-left:5px
    }

    a.active{
      font-weight:600;
    }
  }

  h3{
    color: #FFFFFF;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom:13px;
    position:relative;
    font-weight:600;

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

  @media(max-width:700px){
      div{
        margin:0 auto;
        text-align:center;
        padding-top:147px;
        animation: ${appearFromLeft} 1s;
      }

      nav {
        display:none;
      }

      h3:before{
        left:50px;
      }

      h3:after{
        content:'';
        height: 2px;
        width: 40px;
        transform: scaleY(-1);
        border-radius: 2.5px;
        background-color: #FFFFFF;
        position: absolute;
        bottom:50%;
        right:50px;
      }
  }
`;

export const WhiteContainer = styled.div`
  width:100vw;
  max-height:4350px;

`;

export const CasesContainer = styled.div`
  max-width:1244px;
  width:100%;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  grid-column-gap:10px;
  grid-row-gap:0px;
  margin:-50px auto 50px auto;
  padding:0 2rem;

  img{
    width:100%;
  }

  @media(max-width: 768px) {
    grid-template-columns:1fr 1fr;
  }

  @media(max-width: 600px) {
    grid-template-columns:1fr;
    margin:0 auto;
    padding-top:30px;
  }
`;
