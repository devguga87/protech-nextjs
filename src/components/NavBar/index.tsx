import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

export function NavBar() {
  const router = useRouter();
  function isActive(route: string) {
    if (route === router.pathname) {
      return 'active';
    } else '';
  }

  if (router.pathname == '/') {
    return (
      <S.Container background="#0F3560">
        <S.HeaderContainer color="white">
          <img src="/logo.svg" alt="Logo Protech" />
          <nav>
            <Link href="/">
              <a className={isActive('/')}>HOME</a>
            </Link>
            <Link href="/quemsomos">
              <a>QUEM SOMOS</a>
            </Link>
            <Link href="/#servicos">
              <a>SERVIÇOS</a>
            </Link>
            <Link href="/">
              <a>TECNOLOGIAS</a>
            </Link>
            <Link href="/cases">
              <a className={isActive('/cases')}>CASES</a>
            </Link>
            <Link href="/">
              <a>TRABALHE CONOSCO</a>
            </Link>
            <button type="button">ENTRE EM CONTATO</button>
            <span></span>
            <span className="active">PT</span>
            <span>EN</span>
          </nav>
        </S.HeaderContainer>
      </S.Container>
    );
  }
  return (
    <S.Container background="#fff">
      <S.HeaderContainer color="#0F3560">
        <img src="/logo_positiva.svg" alt="Logo Protech" />
        <nav>
          <Link href="/">
            <a className={isActive('/')}>HOME</a>
          </Link>
          <Link href="/quemsomos">
            <a className={isActive('/quemsomos')}>QUEM SOMOS</a>
          </Link>
          <Link href="/">
            <a className="disabled">SERVIÇOS</a>
          </Link>
          <Link href="/">
            <a className="disabled">TECNOLOGIAS</a>
          </Link>
          <Link href="/cases">
            <a className={isActive('/cases')}>CASES</a>
          </Link>
          <Link href="/">
            <a className="disabled">TRABALHE CONOSCO</a>
          </Link>
          <button type="button">ENTRE EM CONTATO</button>
          <div></div>
          <span className="active">PT</span>
          <span>EN</span>
        </nav>
      </S.HeaderContainer>
    </S.Container>
  );
}
