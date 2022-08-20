import Image from "next/image"
import HoverClick from "../../animated_component/HoverClick"
import PriceTag from "./component/PriceTag"
import itemStyles from "./Item.module.scss"

function Item({ product }) {
  return (
    <div className={itemStyles.itemContainer}>
      <div className={itemStyles.itemUpperInfo}>
        <div className={itemStyles.imageContainer}>
          <HoverClick>
            <Image src={product.image} alt={product.name} />
          </HoverClick>
        </div>
        <strong className={itemStyles.itemName}>{product.name}</strong>
      </div>
      <div>
        <PriceTag size="M" price={product.price.M} />
        <PriceTag size="L" price={product.price.L} />
      </div>
    </div>
  )
}

export default Item