import styled from 'styled-components';

export const WhiteContainer = styled.div`
  max-width: 100vw;
  max-height: 4450px;
  margin: 0 auto;
  padding: 0 2.5rem;
`;

export const CasesContainer = styled.div`
  max-width: 1244px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ProjectDescription = styled.div`
  h2 {
    color: #4a4a4a;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.17px;
    line-height: 27px;
    font-weight: 600;
    margin-top: 30px;
  }
  p {
    max-width: 290px;
    width: 100%;
    color: #6d6e71;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.17px;
    line-height: 25px;
  }

  a {
    color: #df542a;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.17px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
    p {
      max-width: 468px;
      text-align: center;
    }
  }
`;

export const ImagesContainer = styled.div`
  /* width:100%; */
  img {
    display: flex;
    flex-direction: column;
    max-width: 806px;
    width: 100%;
    margin-top: -76px;
    & + img {
      margin-top: 20px;
    }
  }

  @media (max-width: 1024px) {
    img {
      margin-top: -46px;
      max-width: 700px;
      width: 100%;
      padding: 0 2rem;
    }
  }

  @media (max-width: 768px) {
    img {
      margin: 0 auto;
      margin-top: 20px;
      max-width: 700px;
      width: 100%;
      padding: 0 2rem;
    }
  }
`;

export const NavFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;

  a:hover {
    filter: opacity(0.6);
  }

  a span {
    margin: 20px;
    color: #000000;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.17px;
    line-height: 27px;
  }

  a img {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: ;
  }
`;

export const StyledNavButton = styled.a<{ left?: string; right?: string }>`
  position: absolute;
  height: 80px;
  width: 27px;
  background: #e88263;
  margin-top: 170px;
  border: 0;
  left: ${props => props.left};
  right: ${props => props.right};
  transition: filter 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
  }
`;
