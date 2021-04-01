import styled, {keyframes} from 'styled-components';
import Link from 'next/link';

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
  overflow:hidden;
  padding: 0 5rem;

  img {
    position:absolute;
    transform:rotateY(180deg);
    right:-55px;
    top:150px;
  }

  @media(max-width:700px){
    img{
      display:none;
    }
  }
`;

export const ContentContainer = styled.div`
  max-width:1244px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
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
    font-size:15px;
    font-weight:500;
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
        height: 2px;
        width: 40px;
        transform: scaleY(-1);
        border-radius: 2.5px;
        background-color: #FFFFFF;
        position: absolute;
        bottom:50%;
        left:-10px;
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
        right:-10px;
      }
  }
`;

export const WhiteContainer = styled.div`
  max-width:100vw;
  height:2900px;
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
    margin-top:-50px;
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
  margin-top:40px;

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
