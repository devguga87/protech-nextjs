import styled from 'styled-components';

export const Container = styled.div<{background:'string'}>`
  height:97px;
  width:100vw;
  position:fixed;
  background:${props => props.background};
  display:flex;
  align-items:center;
`;


export const HeaderContainer = styled.header<{color:'string'}>`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:1244px;
  margin:0 auto;
  padding:0 2rem;
  nav a{
    font-size:11px;
    line-height:14px;
    letter-spacing:-0.2px;
    /* color:#0F3560; */
    color:${props => props.color};
    font-weight:600;
    display:inline-block; /* novo*/
    height:2rem;/* novo*/
    & + a{
      margin-left:26px;
    }

    &.active{
      font-weight:800;
      border-bottom:2px solid #DF542A;
      border-radius:1px;
    }
  }
  nav button {
      background-color:transparent;
      height: 37.85px;
      width: 147px;
      border: 1px solid #DF542A;
      font-family: Montserrat;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.14px;
      line-height: 13px;
      text-align: center;
      color: #DF542A;
      margin-left:15px; /*ver*/
      &:hover{
        filter:opacity(0.7)
      }
  }
  nav span{
    margin-left:10px;
    color: ${props => props.color};
    font-family: Montserrat;
    font-size: 11px;
    letter-spacing: -0.2px;
    line-height: 14px;

    &.active{
      font-weight:700;
      color:#DF542A
    }
  }

  @media(max-width: 430px) {
    nav a {
      display:none;
    }
  }


`
