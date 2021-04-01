import Link from 'next/link';
import { OrangeContainer, ContentContainer, WhiteContainer, InstContent, WorkContent, GrayContainer, ImageContent} from './styles';

export default function QuemSomos(){
  return(
    <>
      <OrangeContainer>
        <ContentContainer>
            <div>
              <h3>QUEM SOMOS</h3>
              <h2>DESENVOLVEMOS SOLUÇÕES PENSANDO <span>NAS PESSOAS</span>.</h2>
              <p>Somos a PROTECH SOLUTIONS</p>
              <p>Uma empresa focada em consultoria de TI que atua há 6 anos com desenvolvimento,
                manutenção e testes de softwares em ambiente corporativo, atendendo a grandes empresas.
              </p>
              <a href="#instalacoes">()</a>
            </div>
            <nav>
              <Link href="/">
                <a>Home</a>
              </Link>
              <span> > </span>
              <Link href="/quemsomos">
                <a className='active'>Quem Somos</a>
              </Link>
            </nav>
          {/* <img src="/setadown.svg" alt=""/> */}
        </ContentContainer>
        <img src="" alt=""/>
      </OrangeContainer>

      <WhiteContainer id='instalacoes'>
        <InstContent>
          <div >
            <h3 >NOSSA ESTRUTURA</h3>
            <h2>INSTALAÇÕES <span>.</span></h2>
            <p>
              Dispomos de uma estrutura moderna, confortável, em um ambiente climatizado, com sala de reunião para atendimento
              personalizado e estacionamento para veículos. Dispomos de uma infraestrutura de TI preparada para uma alta performance,
              buscando o aumento de produtividade, redução de riscos e melhoria na qualidade dos serviços prestados.
            </p>
          </div>
        </InstContent>
        <ImageContent>
          <img src="/1.png" alt=""/>
          <img src="/3.png" alt=""/>
          <img src="/1.png" alt=""/>
        </ImageContent>
      </WhiteContainer>

      <GrayContainer>
        <WorkContent>
          <div>
            <h3>TRABALHE CONOSCO</h3>
            <h2>QUER <span>FAZER PARTE</span> DO NOSSO TIME ?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button>BANCO DE CURRÍCULOS</button>
          </div>
        </WorkContent>
      </GrayContainer>
    </>
  )
}
