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
    <section>
      <div className={`${gridStyles.sectionWrapper}`} >
        <GridSelector productPromote={productPromote} handleSelectDrink={handleSelectDrink} />
        <ItemDisplay item={productPromote[selected]} />
      </div>
    </section>
  )
}

export default GridProduct