import Image from "next/image"
import HoverClick from "../../animatedComponent/HoverClick"
import gridStyles from "../GridProduct.module.scss"


function GridItem({ item, index, handleSelectDrink }) {
  return (

    <li className={gridStyles.gridItemWrapper} >
      <div className={gridStyles.gridItemBackground} style={{ background: item.color }} ></div>
      <HoverClick>
        <div className={gridStyles.gridItem}>
          <Image src={item.image} alt={item.name} id={index} onClick={handleSelectDrink} />
        </div>
      </HoverClick>
    </li>

  )
}

export default GridItem