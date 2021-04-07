import Link from 'next/link';

import * as S from './styles';

interface IntroContainerProps{
  title:string;
}

export function IntroContainer({title}:IntroContainerProps){
  return(
    <S.OrangeContainer>
      <S.ContentContainer>
        <div>
          <h3>ÚLTIMOS PROJETOS</h3>
          <h2>CASES<span>.</span></h2>
          <p>{title}</p>

        </div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span> > </span>
          <Link href="/cases">
            <a>Portfólio</a>
          </Link>
          <span> > </span>
          <Link href="/case1">
            <a className='active'>{title}</a>
          </Link>

        </nav>
      </S.ContentContainer>
      <img src="/whitesimbol.svg" alt=""/>
    </S.OrangeContainer>
  )
}

