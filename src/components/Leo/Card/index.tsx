import React from 'react';
import { ContainerCard } from './style';

interface IProps {
  icone?: string;
  titulo?: string;
  descricao1?: string;
  descricao2?: string;
  descricao3?: string;
  descricao4?: string;
  descricao5?: string;
  color?: string;
  background?: string;
}

const Card: React.FC<IProps> = ({
  icone,
  titulo,
  descricao1,
  descricao2,
  descricao3,
  descricao4,
  descricao5,
  color,
  background,
}) => {
  return (
    <ContainerCard background={background} color={color}>
      <img src={icone} alt="icone-card" />
      <h3 className="titulo-card">{titulo}</h3>
      <p>{descricao1}</p>
      <p>{descricao2}</p>
      <p>{descricao3}</p>
      <p>{descricao4}</p>
      <p>{descricao5}</p>
    </ContainerCard>
  );
};

export default Card;
