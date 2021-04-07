import { Global } from '../../styles/globals';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Global />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
