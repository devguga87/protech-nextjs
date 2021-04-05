import { OrangeContainer, ContentContainer} from './styles';
import Link from 'next/link';

interface IntroContainerProps{
  title:string;
}

export function IntroContainer({title}:IntroContainerProps){
  return(
    <OrangeContainer>
      <ContentContainer>
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
      </ContentContainer>
      <img src="/whitesimbol.svg" alt=""/>
    </OrangeContainer>
  )
}

