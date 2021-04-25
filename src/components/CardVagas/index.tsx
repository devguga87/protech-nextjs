import * as S from './styles';

interface CardVagasProps {
  numeroDoCard: string;
  cargo: string;
  senioridade: string;
  descricao: string;
}

export function CardVagas({
  numeroDoCard,
  cargo,
  senioridade,
  descricao,
}: CardVagasProps) {
  return (
    <S.Container2>
      <h4>{numeroDoCard}</h4>
      <h5>{cargo}</h5>
      <h5>{senioridade}</h5>
      <p>{descricao}</p>
      <button>SAIBA MAIS</button>
    </S.Container2>
  );
}
