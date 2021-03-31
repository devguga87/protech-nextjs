import { Global } from '../../styles/globals';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Global/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  )

}

export default MyApp
