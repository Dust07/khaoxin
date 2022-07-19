import Image from "next/image"
import promotionStyles from "../styles/Promotion.module.scss"
import promotion from "../public/assets/mock-promotion.png"
function Promotion() {
  return (
    <section className={promotionStyles.promotionWrapper}>
      <div className="row">
        <div className={`${promotionStyles.promotionText} col`}>
          <div className={promotionStyles.textWrapper}>
            <p>Last chance<br></br><em>70%</em><span className={promotionStyles.textEmphasis}><br></br>OFF ALL</span></p>

            <button className={promotionStyles.CTA}>Buy now</button>
          </div>

        </div>
        <div className={`${promotionStyles.promotionRightSideImage} col`}>
          <Image src={promotion} width={800} height={800} alt="promotion-image" />
        </div>
      </div>
    </section>
  )
}

export default Promotion