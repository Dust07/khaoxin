import Image from "next/image"
import CTABtn from "../btn/CTABtn"
import thirdPartyItemStyles from "./ThirdPartyItem.module.scss"
function ThirdPartyItem({ item }) {
  return (
    <div className={thirdPartyItemStyles.itemContainer}>
      <div className={thirdPartyItemStyles.itemImage}>
        <Image src={item.image} width={300} height={400} alt="Delivery providers" />
      </div>
      <h3>Đặt hàng ngay thông qua ứng dụng ABC</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta totam autem, adipisci reiciendis aperiam quasi! Sit, similique quod. Voluptatum amet ducimus et temporibus officia id omnis necessitatibus nobis vitae!</p>
      <div className={thirdPartyItemStyles.itemBtn}>
        <CTABtn text="ORDER NOW" />
      </div>
    </div>
  )
}

export default ThirdPartyItem