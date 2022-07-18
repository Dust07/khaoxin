import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

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

      <Footer></Footer>
    </div>

  )
}
