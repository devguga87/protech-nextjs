import { Container, HeaderContainer} from './styles'

export function Header(){
  return(
    <Container>
      <HeaderContainer>
        <img src="/logo_positiva.svg" alt="Logo Protech"/>
        <nav>
          <a href="">HOME</a>
          <a href="">QUEM SOMOS</a>
          <a href="">SERVIÇOS</a>
          <a href="">TECNOLOGIAS</a>
          <a href="">CASES</a>
          <a href="">TRABALHE CONOSCO</a>
          <button>ENTRE EM CONTATO</button>
        </nav>
      </HeaderContainer>
    </Container>
  )
}
