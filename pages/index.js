import Head from 'next/head'
import Gallery from '../components/gallery/Gallery'
import styles from '../styles/Home.module.scss'
import PromotionCarousel from '../components/promotion_carousel/PromotionCarousel';
import GridProduct from '../components/grid_product/gridProduct';
import Benefit from '../components/benefit/Benefit'
import OrderMethod from '../components/order_method/OrderMethod'
import LocationMap from '../components/map/LocationMap'
import { location } from "../database/location.js"
import Fade from '../components/animated_component/Fade'

export default function Home({ images }) {
  return (
    <Fade>

      <div className={styles.webBackground}>
        <Head>
          <title>Trà sữa Khaoxin</title>
          <meta name="description" content="Trà sữa Khaoxin" />
          <link href="/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          <link href="/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

        </Head>

        <PromotionCarousel />
        {/* <Benefit /> */}
        <GridProduct />
        <OrderMethod />
        <Gallery images={images} />
      </div>

    </Fade>
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