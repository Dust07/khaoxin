import gridStyles from "../GridProduct.module.scss"
import GridItem from "./GridItem"


function GridSelector({ productPromote, handleSelectDrink }) {
  return (
    <ul className={gridStyles.gridWrapper}>
      {productPromote.map((product, index) => {
        return (
          <GridItem key={product.id} index={index} item={product} handleSelectDrink={handleSelectDrink} />
        )
      })}
    </ul>
  )
}

export default GridSelector