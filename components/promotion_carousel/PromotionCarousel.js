import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import reviewPromo from "../../public/assets/PromoBanner/reviewBanner.jpg"
import openingPromo from "../../public/assets/PromoBanner/openingBanner.jpg"
import carouselStyles from "./Carousel.module.scss"

function PromotionCarousel() {
  const redirectToReview = () => {
    window.open('https://forms.gle/XFK7jZwTe1ob2Vsq8');
  }
  return (
    <section className={carouselStyles.promotionSection}>
      <div className={carouselStyles.promotionContainer}>
        <div>
          <Image src={openingPromo} height={700} alt="promotion2" />
        </div>
        <div onClick={() => redirectToReview}>
          <Image src={reviewPromo} height={700} alt="promotion1" />
        </div>
      </div>
      <div className={carouselStyles.carouselContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <Image src={openingPromo} height={700} alt="promotion0" />
          </div>
          <div>
            <Image src={reviewPromo} height={700} alt="promotion1" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default PromotionCarousel