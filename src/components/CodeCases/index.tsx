import * as S from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cases from '../../../cases.json';

interface Image {
  id: number;
  name: string;
}

interface CodeCaseProps {
  description: string;
  client: string;
  date: string;
  link?: string;
  images: Image[];
}

export function CodeCases({
  description,
  client,
  date,
  images,
  link,
}: CodeCaseProps) {
  const router = useRouter();
  const { id } = router.query;
  const idN = Number(id);

  const lastCase = idN > 0 ? `/cases/${idN - 1}` : idN;
  const nextCase = idN < cases.length - 1 ? `/cases/${idN + 1}` : idN;

  return (
    <S.WhiteContainer>
      {/* <Link  href={lastCase} passHref> */}
      <S.StyledNavButton href={lastCase} left="0">
        <img
          src="/case1/setaleft.svg"
          alt="Botão de navegação para case anterior"
        />
      </S.StyledNavButton>
      {/* </Link> */}

      {/* <Link  href={nextCase}> */}
      <S.StyledNavButton href={nextCase} right="0">
        <img
          src="/case1/right.svg"
          alt="Botão de navegação para case posterior"
        />
      </S.StyledNavButton>
      {/* </Link> */}

      <S.CasesContainer>
        <div>
          <S.ProjectDescription>
            <h2>DESCRIÇÃO DO PROJETO</h2>
            <p>{description}</p>
            <h2>CLIENTE</h2>
            <p>{client}</p>
            <h2>DATA</h2>
            <p>{date}</p>
            {link ? (
              <>
                <h2>LINK</h2>
                <a href="">{link}</a>
              </>
            ) : (
              <></>
            )}
          </S.ProjectDescription>

          <S.ImagesContainer>
            {images ? (
              images.map(image => {
                return <img key={image.id} src={image.name} alt="" />;
              })
            ) : (
              <></>
            )}
          </S.ImagesContainer>
        </div>

        <S.NavFooter>
          <a href={lastCase}>
            <img src="/case1/icoleft.svg" alt="" />
            <span>PROJETO ANTERIOR</span>
          </a>

          <a href="/cases">
            <img src="/case1/icotodos.svg" alt="sas" />
          </a>

          <a href={nextCase}>
            <span>PRÓXIMO PROJETO</span>
            <img src="/case1/icoright.svg" alt="" />
          </a>
        </S.NavFooter>
      </S.CasesContainer>
    </S.WhiteContainer>
  );
}
