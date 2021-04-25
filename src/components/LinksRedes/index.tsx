import * as S from './styles';

export function LinkRedes() {
  return (
    <S.Container>
      <ul>
        <li>
          <a href="">
            <img src="/icoInstagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/protechsolu"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icoFacebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icoTwitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/protechsolutions/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icoLinkedin.svg" alt="" />
          </a>
        </li>
      </ul>
    </S.Container>
  );
}
