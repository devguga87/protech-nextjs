import React from 'react';
import { ContainerMiniCard } from './style';

interface IProps {
  numero: string;
  titulo: string;
  descricao: string;
}

const MiniCards: React.FC<IProps> = ({ numero, titulo, descricao }) => {
  return (
    <ContainerMiniCard>
      <h1>{numero}</h1>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </ContainerMiniCard>
  );
};

export default MiniCards;
