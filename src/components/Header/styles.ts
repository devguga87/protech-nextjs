import styled from 'styled-components';

export const Container = styled.div`
  height:97px;
  width:100vw;
  position:fixed;
  background:#FFFFFF;
  display:flex;
  align-items:center;
`;

export const HeaderContainer = styled.header`
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
    color:#0F3560;
    font-weight:600;
    & + a{
      margin-left:26px;
    }
  }
  nav button {
      background-color:#fff;
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

`
