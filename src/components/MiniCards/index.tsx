import * as S from './styles';

interface MiniCardsProps {
  numeroDoCard: string;
  titulo: string;
  descricao: string;
}
// {number, title, description}:MiniCardsProsp
export function MiniCards({ numeroDoCard, titulo, descricao }: MiniCardsProps) {
  return (
    <S.Container>
      <h4>{numeroDoCard}</h4>
      <h5>{titulo}</h5>
      <p>{descricao}</p>
    </S.Container>
  );
}
