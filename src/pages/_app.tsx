import { Global } from '../styles/globals';
import { NavBar } from '../components/NavBar';
import { FooterProtech } from '../components/FooterProtech';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Global />
      <Component {...pageProps} />
      <FooterProtech />
    </>
  );
}

export default MyApp;
