import Head from 'next/head'
import axios from 'axios';

import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductPromote from '../components/ProductPromote'
import Promotion from '../components/Promotion'
import styles from '../styles/Home.module.scss'
import PromotionCarousel from '../components/PromotionCarousel';

export default function Home({ images }) {

  return (
    <div className={styles.webBackground}>
      <Head>
        <title>Khaoxin</title>
        <meta name="description" content="Khaoxin bubble tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      {/* <Hero></Hero> */}

      <PromotionCarousel></PromotionCarousel>

      <ProductPromote></ProductPromote>

      <Promotion></Promotion>

      <Gallery images={images}></Gallery>
      <Footer></Footer>
    </div>

  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://picsum.photos/v2/list?limit=10');
    const data = await response.json()
    return {
      props: {
        images: data
      }
    }
  } catch (error) {
    console.error(error);
  }

}