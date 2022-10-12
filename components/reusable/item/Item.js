import Image from "next/image"
import BotToTopFade from "../../animated_component/BotToTopFade"
import HoverClick from "../../animated_component/HoverClick"
import PriceTag from "./component/PriceTag"
import itemStyles from "./Item.module.scss"

function Item({ product }) {
  return (
    <BotToTopFade name={product.name} className={itemStyles.itemContainer}>
      <div className={itemStyles.itemUpperInfo}>
        <div className={itemStyles.imageContainer}>
          <div className={itemStyles.productImage}>
            <HoverClick>
              <Image src={product.image} alt={product.name} />
            </HoverClick>
          </div>
        </div>
        <strong className={itemStyles.itemName}>{product.name}</strong>
      </div>
      <div>
        {product.price.M / 1000} {product.price.L ? `| ${product.price.L / 1000}` : ""}
      </div>
    </BotToTopFade>
  )
}

export default Item