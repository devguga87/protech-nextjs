import { Global } from '../../styles/globals';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Global/>
      <Component {...pageProps}/>
    </>
  )

}

export default MyApp
