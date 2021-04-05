import { CasesContainer, WhiteContainer, StyledNavButton, NavFooter, ProjectDescription, ImagesContainer } from './styles'
import Link from 'next/link';
import { useRouter } from 'next/router'

interface Image{
  id:number;
  name:string;
}

interface CodeCaseProps{
  description:string;
  client:string;
  date:string;
  link?:string;
  images:Image[];
}
export function CodeCases({description,client,date,images,link}:CodeCaseProps){
  const router = useRouter()
  const { id } = router.query
  const idN = Number(id)

  const lastCase = idN > 0 && `/cases/${idN - 1}`
  const nextCase = idN < id.length &&  `/cases/${idN + 1}`

  return(
    <WhiteContainer>
        {/* <Link  href={lastCase} passHref> */}
          <StyledNavButton href={lastCase} left='0'>
            <img src="/case1/setaleft.svg" alt="Botão de navegação case anterior"/>
          </StyledNavButton>
        {/* </Link> */}

        {/* <Link  href={nextCase}> */}
          <StyledNavButton href={nextCase} right='0'>
            <img src="/case1/right.svg" alt="Botão de navegação case posterior"/>
          </StyledNavButton>
        {/* </Link> */}

        <CasesContainer>
          <div>
            <ProjectDescription>
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
            </ProjectDescription>

            <ImagesContainer>
              {images ? (
                images.map(image => {
                  console.log(image)
                  return(
                      <img key={image.id} src={image.name} alt=""/>
                   )
                  }
                )):(
                  <></>
                )
              }
            </ImagesContainer>
          </div>

        <NavFooter>
            <a href={lastCase}>
              <img src="/case1/icoleft.svg" alt=""/>
              <span>PROJETO ANTERIOR</span>
            </a>

            <a href="/cases"><img src="/case1/icotodos.svg" alt="sas"/></a>

          <a href={nextCase}>
            <span>PRÓXIMO PROJETO</span>
            <img src="/case1/icoright.svg" alt=""/>
          </a>
        </NavFooter>

      </CasesContainer>


    </WhiteContainer>
  )
}

