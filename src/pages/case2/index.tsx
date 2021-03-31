import { OrangeContainer, ContentContainer,CasesContainer, WhiteContainer, NavFooter,  StyledNavButton} from './styles';
import { CodeCases } from '../../components/CodeCases'
const images = ['/case1/1.png','/case1/2.png']

export default function Cases(){
  return(
    <>
      <OrangeContainer>
        <ContentContainer>
          <div>
            <h3>ÚLTIMOS PROJETOS</h3>
            <h2>CASES<span>.</span></h2>
            <p>Portal ELO NANQUIM</p>

          </div>
          <nav>
            <a href="">Home</a>
            <span> > </span>
            <a href="" className='active'>Portfólio</a>
            <span> > </span>
            <a href="" className='active'>Portal ELO NANQUIM</a>

          </nav>
        </ContentContainer>
        <img src="/whitesimbol.svg" alt=""/>
      </OrangeContainer>

      {/* <WhiteContainer>
        <StyledNavButton left='0' href="/cases" >
          <img src="/case1/setaleft.svg" alt=""/>
        </StyledNavButton>

        <StyledNavButton right='0' href="/quemsomos">
          <img src="/case1/right.svg" alt=""/>
        </StyledNavButton>

        <CasesContainer>
          <div>
            <div>
                <h2>DESCRIÇÃO DO PROJETO</h2>
                <p>Desenvolver um site de doações web, objetivando financiamento do programa e ações voltadas à Rede de
                  Professores de Sergipe. Pessoas jurídicas e físicas, via web (site) vão poder conhecer o programa e as ações da RPS e poderão
                  fazer doações por meio de boleto bancário, Paypal, cartão de crédito Banese Card e de outras bandeiras. Deverá ser criado um
                  portal de transparência sendo disponibilizado a todos.</p>
                <h2>CLIENTE</h2>
                <p>Banese Card |IPTI</p>
                <h2>DATA</h2>
                <p>Junho 2019</p>
                <h2>LINK</h2>
                <a href="">https://www.ipti.org.br/projetos/synapse/</a>
            </div>

            <div>
              <img src="/case1/1.png" alt=""/>
              <img src="/case1/2.png" alt=""/>
              <img src="/case1/3.png" alt=""/>
              <img src="/case1/4.png" alt=""/>
            </div>
          </div>

          <NavFooter>
              <a href="">
                <img src="/case1/icoleft.svg" alt=""/>
                <span>PRÓXIMO PROJETO</span>
              </a>

              <a href="/cases"><img src="/case1/icotodos.svg" alt="sas"/></a>

            <a href="">
              <span>PRÓXIMO PROJETO</span>
              <img src="/case1/icoright.svg" alt=""/>
            </a>
          </NavFooter>

        </CasesContainer>


      </WhiteContainer> */}
      <CodeCases
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
         it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
        client='Banese Card'
        date='Janeiro 2021'
        images={images}
        link='https://www.banesecard.com.br/EloNanquim/'
      />



    </>
  )
}
