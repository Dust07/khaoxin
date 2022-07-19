import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductPromote from '../components/ProductPromote'
import Promotion from '../components/Promotion'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.webBackground}>
      <Head>
        <title>Khaoxin</title>
        <meta name="description" content="Khaoxin bubble tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <Hero></Hero>
      <ProductPromote></ProductPromote>
      <Promotion></Promotion>

      <Footer></Footer>
    </div>

  )
}
