import React from 'react';
import { ButtonPrimary, H6, P } from '../common/styles/paginaPadrao';
import { ContainerTitulo } from './style';

const TituloSection: React.FC = ({ children }) => {
  return <ContainerTitulo>{children}</ContainerTitulo>;
};

export default TituloSection;
