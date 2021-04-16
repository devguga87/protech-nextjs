import * as S from './styles';

interface ServiceCardProps {
  title: string;
}

export function ServiceCard({ title }: ServiceCardProps) {
  if (title === 'desenvolvimento') {
    return (
      <S.Container background="#0f3560" color="#ffffff">
        <img src="/icoDesenv.svg" alt="" />
        <h4>DESENVOLVIMENTO</h4>
        <div></div>
        <p>Desenvolvimento de Sites / Landing Pages</p>
        <p>Sistemas Web</p>
        <p>Sistemas para Bancos e Fintechs</p>
        <p>Web APIs</p>
        <p>Migração de Tecnologia(legado para APIs)</p>
      </S.Container>
    );
  }
  if (title === 'consultoria') {
    return (
      <S.Container background="#ffffff" color="#0f3560">
        <img src="/icoDesenv.svg" alt="" />
        <h4>CONSULTORIA</h4>
        <div></div>
        <p>Consultoria em Tecnologia da Informação</p>
        <p>Consultoria Web</p>
        <p>Consultoria em Design de Interfaces</p>
        <p>Estratégia Digital</p>
        <p>Soluções de Inovação</p>
      </S.Container>
    );
  }
  if (title === 'design') {
    return (
      <S.Container background="#ffffff" color="#0f3560">
        <img src="/icoDesenv.svg" alt="" />
        <h4>DESIGN</h4>
        <div></div>
        <p>Design de novos Produtos</p>
        <p>UI/UX Design</p>
        <p>Design Responsivo</p>
        <p>Redesign de Site</p>
      </S.Container>
    );
  }
}
