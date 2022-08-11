import Image from "next/image"
import gridStyles from "../GridProduct.module.scss"


function ItemDisplay({ item }) {
  return (
    <div key={item.name} className={gridStyles.itemDisplayWrapper} >
      <div className={gridStyles.itemContainer}>
        <div className={gridStyles.itemImage}>
          <div className={gridStyles.displayItemBackground} style={{ background: item.color }} ></div>
          <Image className={gridStyles.image} width={200} height={300} src={item.image} alt={item.name} />
        </div>
        <div className={gridStyles.itemText}>
          <div className={gridStyles.itemTitle}>
            <div className={gridStyles.shadowText}>{item.shadowText}</div>
            <h3 className={gridStyles.name}>{item.name}</h3>
          </div>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDisplay