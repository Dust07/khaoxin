import gridStyles from "../GridProduct.module.scss"


function ItemDisplay({ item }) {
  return (
    <div className={gridStyles.itemDisplayWrapper} >
      <p>{item.name}</p>
    </div>
  )
}

export default ItemDisplay