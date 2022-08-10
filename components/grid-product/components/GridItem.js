import Image from "next/image"
import gridStyles from "../GridProduct.module.scss"


function GridItem({ item, index, handleSelectDrink }) {
  return (
    <li className={gridStyles.gridItemWrapper} >
      <div className={gridStyles.gridItemBackground} style={{ background: item.color }} ></div>
      <div className={gridStyles.gridItem}>
        <Image layout="fill" src={item.image} alt={item.name} id={index} onClick={handleSelectDrink} />
      </div>
    </li>
  )
}

export default GridItem