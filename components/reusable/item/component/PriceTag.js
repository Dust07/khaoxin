import Image from "next/image"
import itemStyles from "../Item.module.scss"
import mediumIcon from "../../../../public/assets/medium.svg"
import largeIcon from "../../../../public/assets/large.svg"

function PriceTag({ size, price }) {
  return (
    <div className={itemStyles.priceTag}>
      {size === "M"
        ?
        <Image src={mediumIcon} alt="medium-icon" />
        :
        <Image src={largeIcon} alt="large-icon" />
      }
      <p>{price}đ</p>
    </div>
  )
}

export default PriceTag