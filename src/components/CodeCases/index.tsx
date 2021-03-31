import { CasesContainer, WhiteContainer, StyledNavButton, NavFooter} from './styles'

interface CodeCaseProps{
  description:string;
  client:string;
  date:string;
  link?:string;
  images:string[];
}
export function CodeCases({description,client,date,images,link}:CodeCaseProps){
  return(
    <WhiteContainer>
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
                <p>{description}</p>
                <h2>CLIENTE</h2>
                <p>{client}</p>
                <h2>DATA</h2>
                <p>{date}</p>
                { link ? (
                  <>
                    <h2>LINK</h2>
                    <a href="">{link}</a>
                  </>
                ): (
                  <></>
                )}
            </div>

            <div>
              {images.map(image => {
                <img src='/1.png' alt=""/>
              })}
              {/* <img src="/case1/3.png" alt=""/>
              <img src="/case1/4.png" alt=""/> */}
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


    </WhiteContainer>
  )
}

