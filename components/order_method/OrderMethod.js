import Image from "next/image"
import orderStyles from "./OrderMethod.module.scss"
import delivery from "../../public/assets/delivery.svg"
import ThirdParty from "../reusable/third_party/ThirdParty"
import WebOrderBtn from "../reusable/btn/WebOrderBtn"

function OrderMethod() {
  return (
    <section className={orderStyles.orderMethodWrapper}>
      <div className={`container ${orderStyles.orderMethod}`}>
        <div className="row">
          <div className="col">
            <Image src={delivery} alt="delivery-image" />
          </div>

          <div className={`col-8 ${orderStyles.textSection}`}>
            <div className={orderStyles.textContainer}>
              <h2 className={orderStyles.h2Text}>ORDER ONLINE</h2>
              <p className={orderStyles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque repellat amet eveniet nobis! Accusamus autem cupiditate alias. Tempore numquam natus sapiente quos aut! Rerum cupiditate earum officiis recusandae qui.</p>
            </div>

            <WebOrderBtn />
          </div>
        </div>
      </div>

      <div className={orderStyles.thirdPartyWrapper}>
        <p>Khaoxin đã có mặt trên các ứng dụng</p>
        <ThirdParty itemWidth={300} />
      </div>
    </section >
  )
}

export default OrderMethod