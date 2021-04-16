import React, { useState } from 'react';
import {
  ContainerNavbar,
  ContainerNavbarConteudo,
  BackgroundNavbar,
} from './style';
import { ButtonPrimary } from '../common/styles/paginaPadrao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerNavbar>
      <BackgroundNavbar></BackgroundNavbar>
      <ContainerNavbarConteudo>
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className={open ? 'links active' : 'links'}>
          <ul>
            <a href="">HOME</a>
            <a href="">QUEM SOMOS</a>
            <a href="">SERVIÇOS</a>
            <a href="">TECNOLOGIAS</a>
            <a href="">CASES</a>
            <a href="">TRABALHE CONOSCO</a>
          </ul>
          <ButtonPrimary
            heigth="37px"
            width="147px"
            color="#DF542A"
            border="#DF542A"
            background="transparent"
          >
            ENTRE EM CONTATO
          </ButtonPrimary>
          <button>PT</button>
          <button>EN</button>
        </div>
        <FontAwesomeIcon
          icon={open ? faTimes : faBars}
          onClick={() => setOpen(!open)}
        />
      </ContainerNavbarConteudo>
    </ContainerNavbar>
  );
};

export default Navbar;
