import Link from 'next/link';
import Head from 'next/head';

import * as S from './styles';

export default function Cases(){
  return(
    <>
      <Head>
        <title>Protech | Cases</title>
      </Head>
      <S.OrangeContainer>
        <S.ContentContainer>
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
            <Link href="/cases">
              <a >Portfólio</a>
            </Link>
            <span> > </span>
            <Link href="/cases">
              <a className='active'>Ver Todos</a>
            </Link>
          </nav>
        </S.ContentContainer>
        <img src="" alt=""/>
      </S.OrangeContainer>

      <S.WhiteContainer>
        <S.CasesContainer>


          <Link href='cases/0'>
            <a><img src="/tela1.png" alt=""/></a>
          </Link>
          <Link href='/cases/1'>
            <a><img src="/tela2.png" alt=""/></a>
          </Link>
          <Link href='/cases/1'>
           <a><img src="/tela3.png" alt=""/></a>
          </Link>
          <Link href='/cases/2'>
           <a href=""><img src="/tela4.png" alt=""/></a>
          </Link>
           <a><img src="/tela5.png" alt=""/></a>
          <Link href='/cases/4'>
            <a><img src="/tela6.png" alt=""/></a>
          </Link>
          <Link href='/cases/5'>
            <a><img src="/tela7.png" alt=""/></a>
          </Link>
          <a ><img src="/tela8.png" alt=""/></a>
          <a ><img src="/tela9.png" alt=""/></a>
        </S.CasesContainer>
      </S.WhiteContainer>
    </>
  )
}
