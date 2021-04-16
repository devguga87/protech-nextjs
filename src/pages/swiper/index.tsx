import Link from 'next/link';
import Head from 'next/head';

import * as S from './styles';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Protech | Quem Somos</title>
      </Head>

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
            spaceBetween={600}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
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
    </>
  );
}
