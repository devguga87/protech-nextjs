import Link from 'next/link';
import Head from 'next/head';

import * as S from './styles';
import * as Scroll from 'react-scroll';
import { ServiceCard } from 'components/ServiceCard';
import { MiniCards } from 'components/MiniCards';
import { CardTecnologias } from 'components/CardTecnologias';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardVagas } from 'components/CardVagas';
import { Form } from 'components/Form';
import { Button } from 'components/Button';
import { LinkRedes } from 'components/LinksRedes';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Protech | Home </title>
      </Head>
      <S.OrangeContainer>
        <S.ContainerBackground></S.ContainerBackground>
        <S.ContentContainer>
          <div>
            <h3>IDEIAS CRIATIVAS</h3>
            <h2>
              DESENVOLVEMOS SOLUÇÕES QUE <span>INSPIRAM</span>.
            </h2>
            <p>Olá, somos a PROTECH SOLUTIONS!</p>
            <p>
              Geramos SOLUÇÕES EM TECNOLOGIA que a sua empresa precisa para
              crescer.
            </p>
            <Link href="/quemsomos">
              <S.LinkButton color="#ffffff">CONHEÇA A PROTECH</S.LinkButton>
            </Link>
          </div>

          <Scroll.Link to="servicos" smooth={true} duration={800} offset={-100}>
            <S.NavArrow href="">
              <img
                src="/quemsomos/setascroll.svg"
                alt="Seta para scroll suave"
              />
            </S.NavArrow>
          </Scroll.Link>
        </S.ContentContainer>
        <LinkRedes />
      </S.OrangeContainer>

      <S.GrayContainer>
        <Scroll.Element name="servicos">
          <S.WorkContent>
            <div>
              <h3>SOLUÇÕES INOVADORAS</h3>
              <h2>
                <span>SERVIÇOS</span>.
              </h2>
              <p>Desenvolvemos serviços pensando nas pessoas.</p>
              <p>Foco nos resultados do cliente.</p>
            </div>
            <S.ServiceCardContainer>
              <ServiceCard title="desenvolvimento" />
              <ServiceCard title="consultoria" />
              <ServiceCard title="design" />
            </S.ServiceCardContainer>
            <img src="/icoScrollUp.svg" alt="" />
          </S.WorkContent>
        </Scroll.Element>
      </S.GrayContainer>

      <S.OrangeContainer2>
        <S.WorkContent2>
          <div>
            <h3>PROCESSO E TECNOLOGIA</h3>
            <h2>
              <span>COMO</span> TRABALHAMOS<span>.</span>
            </h2>
            <p>
              Nossos times trabalham com processos ágeis, SCRUM ou KUNBAN, em
              sprints de 15 dias.
            </p>
          </div>
          <S.MiniCardsContainer>
            <MiniCards
              numeroDoCard="01"
              titulo="PLANEJAMENTO E PESQUISA"
              descricao="Nesta fase fazemos todos os levantamentos, pesquisas e planejamentos necessários."
            />
            <MiniCards
              numeroDoCard="02"
              titulo="UX/UI DESIGN"
              descricao="Nesta fase ocorre a análise, a pesquisa e a definição de personas, a arquitetura da informação,  a ideação, a geração de protótipos e o UI Design."
            />
            <MiniCards
              numeroDoCard="03"
              titulo="DESENVOLVIMENTO"
              descricao="Esta é a fase de Front-end e desenvolvimentO."
            />
            <MiniCards
              numeroDoCard="04"
              titulo="IMPLANTAÇÃO E RESULTADOS"
              descricao="Fase de implantação, testes, manutenção e suporte técnico."
            />
          </S.MiniCardsContainer>
          <p>
            A Protech Solutions se mantém constantemente atualizada com as
            tecnologias e metodologias utilizadas no mundo corporativo de
            desenvolvimento de software, dentre elas:
          </p>
          <S.CardTecnologiasContainer>
            <CardTecnologias />
            <CardTecnologias />
          </S.CardTecnologiasContainer>
          <img src="/icoScrollUp.svg" alt="" />
        </S.WorkContent2>
      </S.OrangeContainer2>

      <S.WhiteContainer>
        <S.InstContent>
          <div>
            <h3>ÚLTIMOS PROJETOS</h3>
            <h2>
              CASES <span>.</span>
            </h2>
            <p>Vamos trabalhar juntos em seu próximo projeto?</p>
          </div>
          <Link href="/cases">
            <S.LinkButton color="#0F3560">VER TODOS</S.LinkButton>
          </Link>
        </S.InstContent>
        <S.ImageContent>
          <S.StyledSwiper
            spaceBetween={100}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={true}
            speed={1000}
          >
            <SwiperSlide>
              <img src="/1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/1.png" alt="" />
            </SwiperSlide>
          </S.StyledSwiper>
        </S.ImageContent>
      </S.WhiteContainer>

      <S.OrangeContainer3>
        <S.WorkContent2>
          <div>
            <h3>CONFIRA NOSSAS VAGAS</h3>
            <h2>
              <span>TRABALHE</span> CONOSCO<span>.</span>
            </h2>
            <h6>
              Venha crescer com a gente! Confira as vagas em aberto e nos envie
              o seu currículo/portfólio.
            </h6>
          </div>
          <S.MiniCardsContainer>
            <CardVagas
              numeroDoCard="01"
              cargo="DESENVOLVEDOR .NET"
              senioridade="SENIOR"
              descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <CardVagas
              numeroDoCard="02"
              cargo="UX/UI DESIGNER"
              senioridade="PLENO"
              descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />

            <S.Depoimento>
              <img src="/logo.svg" alt="icone" />
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Duis sed quam libero. Sed eget ante eu
                enim ultrices efficitur sed et leo. Sed et venenatis ligula.
                Donec molestie, nunc vel pharetra suscipit, sapien lacus
                hendrerit quam, sit amet imperdiet dui metus non tellus. Quisque
                a congue lorem.
              </p>
              <div>
                <h3>Sara Martins</h3>
                <h6>UX/UI Designer</h6>
              </div>
            </S.Depoimento>
          </S.MiniCardsContainer>
        </S.WorkContent2>
      </S.OrangeContainer3>

      <S.BlueContainer>
        <S.FormContent>
          <div>
            <h3>PRONTO PARA INICIAR O SEU PROJETO?</h3>
            <h2>
              VAMOS <span>CONVERSAR</span>?
            </h2>
            <p>
              Será um prazer conversar com você! Preencha o formulário abaixo
              para que o nosso comercial possa entrar em contato ou fale conosco
              por telefone.
            </p>
            <Form />
          </div>

          <S.ProtechInfos>
            <div>
              <h4>HORÁRIO DE FUNCIONAMENTO</h4>
              <p>9hr às 18hr.</p>
            </div>

            <div>
              <h4>ENDEREÇO</h4>
              <p>Av. Francisco Porto, 593</p>
              <p>Sala 3 - Grageru</p>
              <p>Aracaju - SE</p>
              <p>49025-230</p>
            </div>

            <div>
              <h4>CONTATO</h4>
              <h4>+55[79]3023-6697</h4>
              <p>joaopaulo@protechsolutions.com.br</p>
            </div>
          </S.ProtechInfos>
        </S.FormContent>
      </S.BlueContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15669.63755585909!2d-37.058194!3d-10.932416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42fb28ef304a2048!2sProtech%20Solutions!5e0!3m2!1spt-BR!2sbr!4v1616698976037!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
    </>
  );
}
