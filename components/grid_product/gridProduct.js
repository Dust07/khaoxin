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
        <h2 className={gridStyles.h2Text}>PLACEHOLDER TITLE</h2>
        <p className={gridStyles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur fuga hic. Minima repellat, ex velit fuga, ducimus nesciunt alias, sed numquam error rerum sapiente voluptatum repellendus quos doloremque exercitationem.</p>
      </div>
      <div className={`container ${gridStyles.gridSectionWrapper}`} >
        <GridSelector productPromote={productPromote} handleSelectDrink={handleSelectDrink} />
        <ItemDisplay item={productPromote[selected]} />
      </div>
    </section>
  )
}

export default GridProduct