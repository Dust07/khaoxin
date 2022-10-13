import { useState } from "react";
import GridSelector from "./components/GridSelector"
import ItemDisplay from "./components/ItemDisplay"
import gridStyles from "./GridProduct.module.scss"
import { productPromote } from "../../database/productPromote"

function GridProduct() {
  const [selected, setSelected] = useState(0);

  const handleSelectDrink = (e) => {
    setSelected(e.target.id);
  }
  return (
    <section className={gridStyles.gridProduct}>
      <div className={`container ${gridStyles.sectionTitle}`}>
        <h2 className={gridStyles.h2Text}>Khaoxin - Make Your Day</h2>
        <p className={gridStyles.descText}>Hãy để Khaoxin giúp bạn quên đi những âu lo muộn phiền trong cuộc sống bằng một ly trà sữa Đậm đà hương vị, Thơm tình yêu thương nhé!</p>
      </div>
      <div className={`container ${gridStyles.gridSectionWrapper}`} >
        <GridSelector productPromote={productPromote} handleSelectDrink={handleSelectDrink} />
        <ItemDisplay item={productPromote[selected]} />
      </div>
    </section>
  )
}

export default GridProduct