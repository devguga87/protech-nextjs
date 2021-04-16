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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Protech | Quem Somos</title>
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
          </div>

          <Scroll.Link
            to="instalacoes"
            smooth={true}
            duration={800}
            offset={-100}
          >
            <S.NavArrow href="">
              <img
                src="/quemsomos/setascroll.svg"
                alt="Seta para scroll suave"
              />
            </S.NavArrow>
          </Scroll.Link>
        </S.ContentContainer>
      </S.OrangeContainer>

      <S.GrayContainer>
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
        </S.WorkContent>
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
              number="01"
              title="PLANEJAMENTO E PESQUISA"
              description="Nesta fase fazemos todos os levantamentos, pesquisas e planejamentos necessários."
            />
            <MiniCards
              number="02"
              title="UX/UI DESIGN"
              description="Nesta fase ocorre a análise, a pesquisa e a definição de personas, a arquitetura da informação,  a ideação, a geração de protótipos e o UI Design."
            />
            <MiniCards
              number="03"
              title="DESENVOLVIMENTO"
              description="Esta é a fase de Front-end e desenvolvimentO."
            />
            <MiniCards
              number="04"
              title="IMPLANTAÇÃO E RESULTADOS"
              description="Fase de implantação, testes, manutenção e suporte técnico."
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

      <S.OrangeContainer2>
        <S.WorkContent2>
          <div>
            <h3>CONFIRA NOSSAS VAGAS</h3>
            <h2>
              <span>TRABALHE</span> CONOSCO<span>.</span>
            </h2>
            <p>
              Venha crescer com a gente! Confira as vagas em aberto e nos envie
              o seu currículo/portfólio.
            </p>
          </div>
          <S.MiniCardsContainer>
            <CardVagas />
            <CardVagas />
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
      </S.OrangeContainer2>
    </>
  );
}
