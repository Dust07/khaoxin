import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import promotion from "../../public/assets/mock-promotion.jpg"
import carouselStyles from "./Carousel.module.scss"

function PromotionCarousel() {
  return (
    <section className={carouselStyles.promotionSection}>
      <div className={carouselStyles.promotionContainer}>
        <div>
          <Image src={promotion} height={700} alt="promotion1" />
        </div>
        <div>
          <Image src={promotion} height={700} alt="promotion2" />
        </div>
        <div>
          <Image src={promotion} height={700} alt="promotion3" />
        </div>
      </div>
      <div className={carouselStyles.carouselContainer}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <Image src={promotion} height={700} alt="promotion1" />
          </div>
          <div>
            <Image src={promotion} height={700} alt="promotion2" />
          </div>
          <div>
            <Image src={promotion} height={700} alt="promotion3" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default PromotionCarousel