import { useRouter } from 'next/router';
import * as S from './styles';

export function FooterProtech() {
  const router = useRouter();
  function isActive(route: string) {
    if (route === router.pathname) {
      return 'active';
    } else '';
  }

  return (
    <S.Container>
      <S.Content>
        <S.InfosContent>
          <div>
            <img src="/logo.svg" alt="" />
            <div>
              <h4>+55[79]3023-6697</h4>
              <p>joaopaulo@protechsolutions.com.br</p>
            </div>
          </div>

          <div>
            <h4>ENDEREÇO</h4>
            <p>Av. Francisco Porto, 593</p>
            <p>Sala 3 - Grageru</p>
            <p>Aracaju - SE</p>
            <p>49025-230</p>
          </div>

          <div>
            <h4>SIGA-NOS</h4>
            <div>
              <a href="">
                <img src="/icoInstagram.svg" alt="" />
              </a>
              <a href="">
                <img src="/icoFacebook.svg" alt="" />
              </a>
              <a href="">
                <img src="/icoTwitter.svg" alt="" />
              </a>
              <a href="">
                <img src="/icoLinkedin.svg" alt="" />
              </a>
            </div>
          </div>

          <div>
            <h4>QUEM SOMOS</h4>
            <p className="quemsomos">
              A Protech Solutions é uma empresa focada em consultoria de TI que
              atua há 6 anos com desenvolvimento, manutenção e testes de
              softwares em ambiente corporativo, atendendo grandes empresas.{' '}
            </p>
          </div>
        </S.InfosContent>
        <S.NavFooter>
          <p>© 2020 Protech Solutions</p>
          <div>
            <ul>
              <li>
                <a href="/" className={isActive('/')}>
                  HOME
                </a>
              </li>
              <li>
                <a href="/quemsomos" className={isActive('/quemsomos')}>
                  QUEM SOMOS
                </a>
              </li>
              <li>
                <a href="">SERVIÇOS</a>
              </li>
              <li>
                <a href="">TECNOLOGIAS</a>
              </li>
              <li>
                <a href="/cases" className={isActive('/cases')}>
                  PORTFÓLIO
                </a>
              </li>
              <li>
                <a href="">TRABALHE CONOSCO</a>
              </li>
              <li>
                <a href="">ENTRE EM CONTATO</a>
              </li>
            </ul>
          </div>
        </S.NavFooter>
      </S.Content>
    </S.Container>
  );
}
