import React from 'react';
import { ButtonPrimary } from '../common/styles/paginaPadrao';
import { Formulario } from './style';

const FormContato: React.FC = () => {
  return (
    <Formulario>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" />
      <label htmlFor="telefone">Telefone</label>
      <input type="text" id="telefone" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="mensagem">Mensagem</label>
      <input type="text" id="mensagem" />
      <ButtonPrimary
        background="#df542a"
        border="#df542a"
        color="#ffffff"
        width="189px"
        heigth="48px"
      >
        ENVIAR
      </ButtonPrimary>
    </Formulario>
  );
};

export default FormContato;
