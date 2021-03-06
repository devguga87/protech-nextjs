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
