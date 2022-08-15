import Head from 'next/head'

import Footer from '../components/layout/footer/Footer'
import Gallery from '../components/gallery/Gallery'
import Header from '../components/layout/header/Header'
import styles from '../styles/Home.module.scss'
import PromotionCarousel from '../components/promotion_carousel/PromotionCarousel';
import GridProduct from '../components/grid_product/gridProduct';
import Benefit from '../components/benefit/Benefit'
import OrderMethod from '../components/order_method/OrderMethod'

export default function Home({ images }) {

  return (
    <div className={styles.webBackground}>
      <Head>
        <title>Khaoxin</title>
        <meta name="description" content="Trà sữa Khaoxin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <PromotionCarousel />
      <Benefit />
      <GridProduct />
      <OrderMethod />
      <Gallery images={images} />
      <Footer />
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