import React from 'react';
import {
  ButtonPrimary,
  ContainerColumn,
  H6,
  P,
  SectionPage,
} from 'components/Leo/common/styles/paginaPadrao';
import { ContainerBackground, ContainerConteudo } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Card from 'components/Leo/Card';
import MiniCards from 'components/Leo/MiniCards';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
import CardVaga from 'components/Leo/CardVaga';
import Form from 'components/Leo/FormContato';
import TituloSection from 'components/Leo/TituloSection';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const HomeLeo: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Protech Solutions</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
      </Head>
      <main>
        <SectionPage background="#0F3560">
          <ContainerBackground></ContainerBackground>
          <ContainerConteudo>
            <div className="conteudo-home">
              <TituloSection>
                <H6 color="#ffffff" background="#ffffff">
                  IDEIAS CRIATIVAS
                </H6>
                <h1>
                  DESENVOLVEMOS SOLUÇÕES QUE <span>INSPIRAM</span>
                </h1>
                <P color="#ffffff">Olá, somos a Protech Solutions!</P>
                <P color="#ffffff">
                  Geramos Soluções em tecnologia que a empresa precisa pra
                  crescer
                </P>
                <ButtonPrimary
                  heigth="48px"
                  width="189px"
                  color="#FFFFFF"
                  border="#FFFFFF"
                  background="transparent"
                >
                  Conheça a Protech
                </ButtonPrimary>
              </TituloSection>
              <div className="redes-home">
                <ul>
                  <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </ul>
              </div>
            </div>
          </ContainerConteudo>
        </SectionPage>
        <SectionPage background="#D5DDE5">
          <ContainerConteudo>
            <ContainerColumn>
              <TituloSection>
                <H6 color="#0F3560" background="#DF542A">
                  SOLUÇÕES INOVADORAS
                </H6>
                <h1>
                  <span>Serviços</span>.
                </h1>
                <P color="#0F3560">
                  Desenvolvemos serviços pensando nas pessoas. <br /> Foco nos
                  resultados do cliente.{' '}
                </P>
              </TituloSection>
              <div className="cards">
                <Card
                  color="#fffffff"
                  background="#0F3560"
                  icone="/iconDesen.svg"
                  titulo="DESENVOLVIMENTO"
                  descricao1="Desenvolvimento de Sites / Landing Pages"
                  descricao2="Sistemas Web "
                  descricao3="Sistemas para Bancos e Fintechs"
                  descricao4="Web APIs"
                  descricao5="Migração de Tecnologia (legado para APIs)"
                />
                <Card
                  color="#0F3560"
                  background="#ffffff"
                  icone="/iconDesen.svg"
                  titulo="CONSULTORIA"
                  descricao1="Consultoria em Tecnologia da Informação"
                  descricao2="Consultoria Web"
                  descricao3="Consultoria em Design de Interfaces "
                  descricao4="Estratégia Digital "
                  descricao5="Soluções de Inovação "
                />
                <Card
                  color="#0F3560"
                  background="#ffffff"
                  icone="/iconDesen.svg"
                  titulo="DESIGN"
                  descricao1="Design de novos Produtos"
                  descricao2="UI/UX Design"
                  descricao3="Design Responsivo"
                  descricao4="Redesign de Site"
                />
              </div>
            </ContainerColumn>
          </ContainerConteudo>
        </SectionPage>
        <SectionPage background="#df542a">
          <ContainerConteudo>
            <ContainerColumn>
              <TituloSection>
                <H6 color="#ffffff" background="#ffffff">
                  PROCESSO E TECNOLOGIA
                </H6>
                <h1 className="titulo-processos">
                  COMO <span className="section-processo">TRABALHAMOS.</span>
                </h1>
                <P color="#ffffff">
                  Nossos times trabalham com processos ágeis, SCRUM ou KANBAN,
                  em sprints de 15 dias.
                </P>
              </TituloSection>
              <div className="miniCards">
                <MiniCards
                  numero="01"
                  titulo="PLANEJAMENTO E PESQUISA"
                  descricao="Nesta fase fazemos todos os levantamentos, pesquisas e planejamentos necessários."
                />
                <MiniCards
                  numero="02"
                  titulo="UX/UI DESIGN"
                  descricao="Nesta fase ocorre a análise, a pesquisa e a definição de personas, a arquitetura da informação,  a ideação, a geração de protótipos e o UI Design."
                />
                <MiniCards
                  numero="03"
                  titulo="DESENVOLVIMENTO"
                  descricao="Esta é a fase de Front-end e desenvolvimento."
                />
                <MiniCards
                  numero="04"
                  titulo="IMPLANTAÇÃO E RESULTADOS"
                  descricao="Fase de implantação, testes, manutenção e suporte técnico."
                />
              </div>
              <P color="#ffffff" className="p-processos">
                A Protech Solutions se mantém constantemente atualizada com as
                tecnologias e metodologias utilizadas no mundo corporativo de
                desenvolvimento de software, dentre elas:
              </P>
              <div className="container-box-tecnologias">
                <div className="box-tecnologias">
                  <h6>HTML5</h6>
                  <h6>CSS3</h6>
                  <h6>JAVASCRIPT</h6>
                  <h6>REACT</h6>
                  <h6>TYPESCRIPT</h6>
                  <h6>.NET CORE</h6>
                </div>
                <div className="box-tecnologias">
                  <h6>Visual Studio</h6>
                  <h6>.Net Framework</h6>
                  <h6>Microsoft SQL Server</h6>
                  <h6>C#</h6>
                  <h6>ASP</h6>
                  <h6>VB</h6>
                </div>
              </div>
            </ContainerColumn>
          </ContainerConteudo>
        </SectionPage>
        <SectionPage background="#ffffff">
          <ContainerConteudo>
            <div className="container-titulo-cases">
              <TituloSection>
                <H6 color="#0F3560" background="#0F3560">
                  ULTIMOS PROJETOS
                </H6>
                <h1>
                  <span className="section-processo">Cases.</span>
                </h1>
                <P color="#0F3560">
                  Vamos trabalhar juntos em seu próximo projeto?
                </P>
              </TituloSection>
              <ButtonPrimary
                heigth="48px"
                width="189px"
                color="#0F3560"
                background="transparent"
                border="#0F3560"
              >
                VER TODOS
              </ButtonPrimary>
            </div>
            <div className="container-slider">
              <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                navigation={{
                  nextEl: '.swiper-button-prev',
                  prevEl: '.swiper-button-next',
                }}
                direction="horizontal"
                autoplay={true}
                speed={500}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    width: 320,
                  },
                  480: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    width: 480,
                  },
                  720: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/backgroundProtech.svg" alt="" />
                </SwiperSlide>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>
          </ContainerConteudo>
        </SectionPage>
        <SectionPage background="#DF542A">
          <div className="container-trabalhe-conosco">
            <ContainerConteudo>
              <TituloSection>
                <H6 color="#FFFFFF" background="#FFFFFF">
                  CONFIRA NOSSAS VAGAS
                </H6>
                <h1>
                  TRABALHE<span className="section-processo">CONOSCO.</span>
                </h1>
                <P color="#FFFFFF">
                  Venha crescer com a gente! Confira as vagas em aberto e nos
                  envie o seu currículo/portfólio.{' '}
                </P>
              </TituloSection>
              <div className="cards-vagas">
                <CardVaga
                  numero="01"
                  titulo="DESENVOLVEDOR SENIOR.NET"
                  descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                />
                <CardVaga
                  numero="02"
                  titulo="UX/UI DESIGNER PLENO"
                  descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                />
              </div>
            </ContainerConteudo>
            <div className="slide-depoimento">
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                centeredSlides={true}
                pagination={{
                  el: '.swiper-pagination',
                  type: 'bullets',
                }}
                direction="horizontal"
                autoplay={true}
                speed={500}
              >
                <SwiperSlide>
                  <div className="depoimento">
                    <img src="/logo.svg" alt="icone" />
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Duis sed quam libero. Sed
                      eget ante eu enim ultrices efficitur sed et leo. Sed et
                      venenatis ligula. Donec molestie, nunc vel pharetra
                      suscipit, sapien lacus hendrerit quam, sit amet imperdiet
                      dui metus non tellus. Quisque a congue lorem.
                    </p>
                    <div>
                      <h3>Sara Martins</h3>
                      <h6>UX/UI Designer</h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="depoimento">
                    <img src="/logo.svg" alt="icone" />
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Duis sed quam libero. Sed
                      eget ante eu enim ultrices efficitur sed et leo. Sed et
                      venenatis ligula. Donec molestie, nunc vel pharetra
                      suscipit, sapien lacus hendrerit quam, sit amet imperdiet
                      dui metus non tellus. Quisque a congue lorem.
                    </p>
                    <div>
                      <h3>Sara Martins</h3>
                      <h6>UX/UI Designer</h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="depoimento">
                    <img src="/logo.svg" alt="icone" />
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Duis sed quam libero. Sed
                      eget ante eu enim ultrices efficitur sed et leo. Sed et
                      venenatis ligula. Donec molestie, nunc vel pharetra
                      suscipit, sapien lacus hendrerit quam, sit amet imperdiet
                      dui metus non tellus. Quisque a congue lorem.
                    </p>
                    <div>
                      <h3>Sara Martins</h3>
                      <h6>UX/UI Designer</h6>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SectionPage>
        <SectionPage background="#0F3560">
          <div className="container-contato">
            <ContainerConteudo>
              <TituloSection>
                <H6 color="#FFFFFF" background="#0F3560">
                  PRONTO PARA INICIAR O SEU PROJETO?
                </H6>
                <h1>
                  VAMOS<span className="section-processo">CONVERSAR.</span>
                </h1>
                <P className="paragrafo-contato" color="#FFFFFF">
                  Será um prazer conversar com você! Preencha o formulário
                  abaixo para que o nosso comercial possa entrar em contato ou
                  fale conosco por telefone.
                </P>
              </TituloSection>
              <Form />
            </ContainerConteudo>
            <div className="container-info-contato">
              <div>
                <h3>HORÁRIO DE FUNCIONAMENTO</h3>
                <p>9h às 18h.</p>
              </div>
              <div>
                <h3>ENDEREÇO</h3>
                <p>
                  Av. Francisco Porto, 593 Sala 3 - Grageru Aracaju - SE
                  49025-230
                </p>
              </div>
              <div>
                <h3>CONTATO</h3>
                <p>+55 [79] 3023-6697</p>
                <p>joaopaulo@protechsolutions.com.br</p>
              </div>
            </div>
          </div>
        </SectionPage>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15669.63755585909!2d-37.058194!3d-10.932416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42fb28ef304a2048!2sProtech%20Solutions!5e0!3m2!1spt-BR!2sbr!4v1616698976037!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </main>
    </div>
  );
};

export default HomeLeo;
