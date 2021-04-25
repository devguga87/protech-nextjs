import styled from 'styled-components';

export const Container = styled.div`
  height: 358px;
  width: 100vw;
  background-color: #0f3560;
`;

export const Content = styled.div`
  max-width: 1244px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
`;

export const InfosContent = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 1rem;
  border-bottom: 1px solid gray;
  padding-bottom: 40px;
  img {
    margin-bottom: 30px;
  }
  div {
    div h4 {
      margin-bottom: 10px;
    }
  }

  a {
    & + a {
      margin-left: 20px;
    }

    &:hover {
      filter: brightness(0.6);
    }
  }
  h4 {
    color: #fff;
    margin-bottom: 28px;
  }
  p {
    opacity: 0.5;
    color: #ffffff;
    line-height: 25px;
    font-size: 15px;
  }
  p.quemsomos {
    width: 341px;
  }
`;

export const NavFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-block;
    height: 40px;
    padding-top: 20px;
    &.active {
      font-weight: 700;
      border-top: 2px solid #df542a;
      border-radius: 1px;
      padding-top: 18px;
      &:hover {
        filter: opacity(1);
      }
    }
    &:hover {
      filter: opacity(0.7);
    }
  }

  p {
    opacity: 0.5;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 24px;
    padding-top: 15px;
  }
  ul {
    display: flex;
    list-style: none;

    li {
      color: #ffffff;
      font-size: 12px;
      letter-spacing: -0.22px;
      line-height: 15px;
      margin-right: 25px;
    }
  }
`;
