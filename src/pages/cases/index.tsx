import Link from 'next/link';
import { OrangeContainer, ContentContainer,CasesContainer, WhiteContainer} from './styles';

export default function Cases(){
  return(
    <>
      <OrangeContainer>
        <ContentContainer>
          <div>
            <h3>ÚLTIMOS PROJETOS</h3>
            <h2>CASES<span>.</span></h2>
            <p>Vamos trabalhar juntos em seu próximo projeto?</p>

          </div>
          <nav>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <span> > </span>
            <a href="" className='active'>Portfólio</a>
            <span> > </span>
            <a href="" className='active'>Ver Todos</a>
          </nav>
        </ContentContainer>
        <img src="" alt=""/>
      </OrangeContainer>

      <WhiteContainer>
        <CasesContainer>
          <Link href='/case1'>
            <a><img src="/tela1.png" alt=""/></a>
          </Link>
          <Link href='/case2'>
            <a><img src="/tela2.png" alt=""/></a>
          </Link>
          <a href=""><img src="/tela3.png" alt=""/></a>
          <a href=""><img src="/tela4.png" alt=""/></a>
          <a href=""><img src="/tela5.png" alt=""/></a>
          <a href=""><img src="/tela6.png" alt=""/></a>
          <a href=""><img src="/tela7.png" alt=""/></a>
          <a href=""><img src="/tela8.png" alt=""/></a>
          <a href=""><img src="/tela9.png" alt=""/></a>
        </CasesContainer>
      </WhiteContainer>
    </>
  )
}
