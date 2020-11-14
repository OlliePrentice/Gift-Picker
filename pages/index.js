import Container from '../components/container'
import Layout from '../components/layout'
import { getRandomProduct } from '../lib/api'
import Head from 'next/head'
import Intro from '../components/intro'

export default function Index({ preview, allProducts }) {
  const heroProduct = allProducts[0]
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Perfect Gift Picker</title>
        </Head>
        <Container>
          <Intro/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allProducts = await getRandomProduct(preview)
  return {
    props: { preview, allProducts },
  }
}
