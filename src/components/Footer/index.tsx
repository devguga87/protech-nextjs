import { ContainerFooter, ContainerInfosFooter, MenuFooter } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer(){
  return(
    <ContainerFooter>
      <ContainerInfosFooter>
          <div className="info">
              <img src="/logo.svg" alt="" />
              <h3>+55 [79] 3023-6697</h3>
              <p>joaopaulo@protechsolutions.com.br</p>
          </div>
          <div className="info">
              <h3>ENDEREÇO</h3>
              <p>Av. Francisco Porto, 593 Sala 3 - Grageru
              Aracaju - SE 49025-230</p>
          </div>
          <div className="info">
              <h3>SIGA-NOS</h3>
              <ul>
                  <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
              </ul>
          </div>
          <div className="info">
              <h3>QUEM SOMOS</h3>
              <p>A Protech Solutions é uma empresa focada em consultoria de TI
              que atua há 6 anos com desenvolvimento,
              manutenção e testes de softwares em ambiente corporativo,
              atendendo grandes empresas.
              </p>
          </div>
      </ContainerInfosFooter>
      <MenuFooter>
          <p>© 2020 Protech Solutions</p>
          <ul>
              <a href="">HOME</a>
              <a href="">QUEM SOMOS</a>
              <a href="">SERVIÇOS</a>
              <a href="">TECNOLOGIAS</a>
              <a href="">PORTFÓLIO</a>
              <a href="">TRABALHE CONOSCO</a>
              <a href="">ENTRE EM CONTATO</a>
          </ul>
      </MenuFooter>
  </ContainerFooter>
);

}
