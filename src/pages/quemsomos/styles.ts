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
  height:800px;
  background-color:#CA4820;
  width:100vw;
  padding:0 2rem;
`;

export const ContentContainer = styled.div`
  max-width:1244px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  padding: 0 3rem;
  div{
    padding-top:267px;
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
    width:100%;
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
  height:816px;
  background-color:#FFFFFF;
  width:100vw;
`;

export const InstContent = styled.div`
  max-width:1244px;
  margin:0 auto;
  padding-top:100px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3{
    color: #0F3560;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom:14px;
    position:relative;

    &:before{
      content:'';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #0F3560;
      position: absolute;
      bottom:50%;
      left:-50px;
    }
  }

  h2{
    font-size:40px;
    max-width:650px;
    width:100%;
    color:#CA4820;
    margin-bottom:19px;

    span{
      color:#0F3560
    }
  }

  p{
    height: 59px;
    max-width: 898px;
    width:100%;
    color: #0F3560;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }
`;

export const ImageContent = styled.div `
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    img{
      box-sizing:border-box;
      margin-top:150px;
      width:100%;
      max-height:300px;
    }
`

export const GrayContainer = styled.div`
  height:600px;
  background-color:#E8EBF1;
  width:100vw;
`;

export const WorkContent = styled.div`
  max-width:1244px;
  margin:0 auto;
  padding-top:143px;
  padding-left: 3rem;
  padding-right: 3rem;

  h3{
    color: #0F3560;
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: -0.07px;
    line-height: 16px;
    margin-bottom:14px;
    position:relative;

    &:before{
      content:'';
      height: 2px;
      width: 40px;
      transform: scaleY(-1);
      border-radius: 2.5px;
      background-color: #0F3560;
      position: absolute;
      bottom:50%;
      left:-50px;
    }
  }

  h2{
    font-size:40px;
    max-width:650px;
    color:#CA4820;
    margin-bottom:19px;

    span{
      color:#0F3560
    }
  }

  p{
    height: 59px;
    max-width: 898px;
    color: #0F3560;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.18px;
    line-height: 22px;
  }

  button{
    height: 48px;
    width: 247px;
    border: 1px solid #DF542A;
    background-color: #DF542A;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 13px;
    text-align: center;
    margin-top:48px;
    transition:filter 0.2s;
    &:hover{
      filter:brightness(0.8)
    }
`;
