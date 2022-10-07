import Image from "next/image"
import orderStyles from "./OrderMethod.module.scss"
import delivery from "../../public/assets/delivery.svg"
import WebOrderBtn from "../reusable/btn/WebOrderBtn"
import ThirdPartyItem from "../reusable/third_party_item/ThirdPartyItem"
import { thirdPartyList } from "../../database/thirdParty"

function OrderMethod() {
  return (
    <section className={`container ${orderStyles.orderMethodWrapper}`}>
      <div className={`${orderStyles.orderMethod}`}>
        <div className="row">
          <div className={`col ${orderStyles.orderMethodImage}`}>
            <Image src={delivery} alt="delivery-image" />
          </div>

          <div className={`col ${orderStyles.textSection}`}>
            <div className={orderStyles.textContainer}>
              <h2 className={orderStyles.h2Text}>ORDER ONLINE</h2>
              <p className={orderStyles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque repellat amet eveniet nobis! Accusamus autem cupiditate alias. Tempore numquam natus sapiente quos aut! Rerum cupiditate earum officiis recusandae qui.</p>
            </div>

            <WebOrderBtn />
          </div>
        </div>
      </div>

      <div className={orderStyles.thirdPartyWrapper}>
        {thirdPartyList.map((item) => {
          return <ThirdPartyItem key={item.id} item={item} />
        })}
      </div>
    </section >
  )
}

export default OrderMethod