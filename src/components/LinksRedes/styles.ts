import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    right: 25px;
    top: 300px;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }

  a {
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;
