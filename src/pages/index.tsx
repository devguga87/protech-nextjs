import Head from 'next/head'

import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h1>Hello</h1>
      </Container>
    </>
  )
}
