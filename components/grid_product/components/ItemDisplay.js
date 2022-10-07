import Image from "next/image"
import gridStyles from "../GridProduct.module.scss"
import LeftToRightFade from "../../animated_component/LeftToRightFade"

function ItemDisplay({ item }) {
  return (
    <div className={gridStyles.itemDisplayWrapper} >
      <div className={gridStyles.itemContainer}>
        <div className={gridStyles.itemImageWrapper}>
          <LeftToRightFade name={item.name} className={gridStyles.itemImage}>
            <div className={gridStyles.displayItemBackground} style={{ background: item.color }} ></div>
            <Image className={gridStyles.highlightedImage} src={item.image} alt={item.name} />
          </LeftToRightFade>
        </div>
        <div className={gridStyles.itemText}>
          <div className={gridStyles.itemTitle}>
            <h3 className={gridStyles.name}>{item.name}</h3>
          </div>
          <p>{item.desc}</p>
        </div>
      </div>
    </div >

  )
}

export default ItemDisplay