import * as S from './styles';

interface MiniCardsProps {
  number: string;
  title: string;
  description: string;
}
// {number, title, description}:MiniCardsProsp
export function MiniCards({ number, title, description }: MiniCardsProps) {
  return (
    <S.Container>
      <h4>{number}</h4>
      <h5>{title}</h5>
      <p>{description}</p>
    </S.Container>
  );
}
