import { Button } from 'components/Button';
import { useState } from 'react';
import * as S from './styles';

export function Form() {
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');

  return (
    <S.Container>
      <label htmlFor="name">Nome</label>
      <S.Input
        isActive={isActive}
        onSelect={() => setIsActive(!!isActive)}
        type="text"
        name=""
        required
        id="name"
        placeholder="Digite o seu nome completo"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor="phone">Telefone</label>
      <input
        type="text"
        name=""
        id="phone"
        placeholder="Digite o seu telefone"
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name=""
        id="email"
        placeholder="Digite o seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea id="mensagem" placeholder="Digite sua mensagem"></textarea>
      <Button
        width="180px"
        height="50px"
        color="#fff"
        backgroundColor="#ca4820"
        type="submit"
      >
        ENVIAR
      </Button>
      <p>
        * Suas informações de contato não serão utilizadas para enviar qualquer
        tipo de SPAM.
      </p>
    </S.Container>
  );
}
