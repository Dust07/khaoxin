import menuStyles from "./MenuDisplay.module.scss"
import { categoryList } from "../../database/category"
import { productList } from "../../database/product"
import CategoryBtn from "../reusable/btn/categoryBtn"
import Item from "../reusable/item/Item"

function MenuDisplay() {
  return (
    <section className={menuStyles.menuWrapper}>
      <div className={`container ${menuStyles.menu}`}>
        <div className={menuStyles.menuTitle}>
          <h1>KHAOXIN MENU</h1>
        </div>
        <div className={menuStyles.menuDisplay}>
          <div className={menuStyles.category}>
            <ul>
              {categoryList.map(category => {
                return (
                  <li key={category.id} >
                    <CategoryBtn text={category.name} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={menuStyles.item}>
            {productList.map(product => {
              return (
                <Item key={product.id} product={product} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuDisplay