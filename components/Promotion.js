import Image from "next/image"
import promotionStyles from "../styles/Promotion.module.scss"
import promotion from "../public/assets/mock-promotion.jpg"
function Promotion() {
  return (
    <section className={promotionStyles.promotionWrapper}>
      <div className={promotionStyles.buttonWrapper}>
        <button className={promotionStyles.CTA}>Order now</button>
      </div>
      <Image src={promotion} alt="promotion-image" />
    </section >
  )
}

export default Promotion