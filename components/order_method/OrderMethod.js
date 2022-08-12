import Image from "next/image"
import orderStyles from "./OrderMethod.module.scss"
import delivery from "../../public/assets/delivery.svg"
import webOrder from "../../public/assets/weborder.svg"
import ThirdParty from "./components/ThirdParty"

function OrderMethod() {
  return (
    <section className={orderStyles.orderMethodWrapper}>
      <div className={`container ${orderStyles.orderMethod}`}>
        <div className="row">
          <div className="col">
            <Image src={delivery} alt="delivery-image" width={300} height={300} />
          </div>

          <div className={`col-7 ${orderStyles.textSection}`}>
            <div className={orderStyles.textContainer}>
              <h2 className={orderStyles.h2Text}>ORDER ONLINE</h2>
              <p className={orderStyles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque repellat amet eveniet nobis! Accusamus autem cupiditate alias. Tempore numquam natus sapiente quos aut! Rerum cupiditate earum officiis recusandae qui.</p>
            </div>

            <button className={orderStyles.webOrderBtn}>
              <Image src={webOrder} alt="web-order-btn" />
            </button>
          </div>
        </div>
      </div>

      <ThirdParty />
    </section >
  )
}

export default OrderMethod