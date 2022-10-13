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
              <h2 className={orderStyles.h2Text}>ĐẶT HÀNG </h2>
              <p className={orderStyles.descText}>Không cần đi đâu xa, hãy để chúng mình tiếp thêm năng lượng cho bạn bằng những ly trà sữa Khaoxin.</p>
              <ul>
                <li className={orderStyles.descText}>- Freeship nếu bạn ở gần khu vực của chúng mình</li>
                <li className={orderStyles.descText}>- Giao nước tốc độ, đảm bảo chất lượng</li>
                <li className={orderStyles.descText}>- Nhân viên giao nước nhiệt tình, dễ thương</li>
              </ul>
            </div>

            <WebOrderBtn />
          </div>
        </div>
      </div>

      {/* <div className={orderStyles.thirdPartyWrapper}>
        {thirdPartyList.map((item) => {
          return <ThirdPartyItem key={item.id} item={item} />
        })}
      </div> */}
    </section >
  )
}

export default OrderMethod