import React from 'react';
import { ButtonPrimary } from '../common/styles/paginaPadrao';
import { ContainerCardVaga } from './style';

interface IpropsCard {
  numero?: string;
  titulo?: string;
  descricao?: string;
}

const CardVaga: React.FC<IpropsCard> = ({ numero, titulo, descricao }) => {
  return (
    <ContainerCardVaga>
      <h1>{numero}</h1>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <ButtonPrimary
        background="#DF542A"
        border="#DF542A"
        color="#ffffff"
        heigth="48px"
        width="173px"
      >
        SAIBA MAIS
      </ButtonPrimary>
    </ContainerCardVaga>
  );
};

export default CardVaga;
