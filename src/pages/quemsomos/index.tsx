import Link from 'next/link';
import Head from 'next/head';

import * as S from './styles'
import * as Scroll from 'react-scroll'

export default function QuemSomos(){
  return(
    <>
      <Head>
        <title>Protech | Quem Somos</title>
      </Head>
      <S.OrangeContainer>
        <S.ContentContainer>
           <div>
            <div>
                <h3>QUEM SOMOS</h3>
                <h2>DESENVOLVEMOS SOLUÇÕES PENSANDO <span>NAS PESSOAS</span>.</h2>
                <p>Somos a PROTECH SOLUTIONS</p>
                <p>Uma empresa focada em consultoria de TI que atua há 6 anos com desenvolvimento,
                  manutenção e testes de softwares em ambiente corporativo, atendendo a grandes empresas.
                </p>
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
            </div>
            <Scroll.Link to="instalacoes" smooth={true} duration={800} offset={-100}>
              <S.NavArrow href=''>
                <img src="/quemsomos/setascroll.svg" alt="Seta para scroll suave"/>
              </S.NavArrow>
            </Scroll.Link>
        </S.ContentContainer>
      </S.OrangeContainer>

      <Scroll.Element name='instalacoes'>
        <S.WhiteContainer>
          <S.InstContent>
            <div >
              <h3 >NOSSA ESTRUTURA</h3>
              <h2>INSTALAÇÕES <span>.</span></h2>
              <p>
                Dispomos de uma estrutura moderna, confortável, em um ambiente climatizado, com sala de reunião para atendimento
                personalizado e estacionamento para veículos. Dispomos de uma infraestrutura de TI preparada para uma alta performance,
                buscando o aumento de produtividade, redução de riscos e melhoria na qualidade dos serviços prestados.
              </p>
            </div>
          </S.InstContent>
          <S.ImageContent>
            <img src="/1.png" alt=""/>
            <img src="/3.png" alt=""/>
            <img src="/1.png" alt=""/>
          </S.ImageContent>
        </S.WhiteContainer>
      </Scroll.Element>

      <S.GrayContainer>
        <S.WorkContent>
          <div>
            <h3>TRABALHE CONOSCO</h3>
            <h2>QUER <span>FAZER PARTE</span> DO NOSSO TIME ?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <button>BANCO DE CURRÍCULOS</button>
          </div>
        </S.WorkContent>
      </S.GrayContainer>
    </>
  )
}
