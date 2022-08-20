import { useEffect, useState } from "react"
import { categoryList } from "../../database/category"
import { productList } from "../../database/product"
import menuStyles from "./MenuDisplay.module.scss"
import CategoryBtn from "../reusable/btn/categoryBtn"
import Item from "../reusable/item/Item"
import BotToTopFade from "../animated_component/BotToTopFade"
import { useInView } from "react-intersection-observer"

function MenuDisplay() {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    window.scroll(0, 907);
  }

  useEffect(() => {
    if (selectedCategory <= 1) {
      setSelectedProducts(productList);
    }
    if (selectedCategory > 1) {
      const currentProduct = productList.filter(product => product.category === parseInt(selectedCategory))
      setSelectedProducts(currentProduct);
    }
  }, [selectedCategory])

  return (
    <section className={menuStyles.menuWrapper}>
      <div className={`container`}>
        <div className={menuStyles.menuTitle}>
          <h1>KHAOXIN MENU</h1>
        </div>
        <div className={menuStyles.menuDisplay}>
          <div className={menuStyles.category}>
            <ul className={menuStyles.categoryList}>
              {categoryList.map(category => {
                return (
                  <li key={category.id} >
                    <CategoryBtn
                      text={category.name}
                      categoryValue={category.id}
                      handleSelectCategory={handleSelectCategory}
                      isSelected={selectedCategory == category.id} />
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={menuStyles.item} ref={ref}>
            {inView && selectedProducts.map(product => {
              return (
                <BotToTopFade key={product.id} name={product.name} >
                  <Item product={product} />
                </BotToTopFade>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuDisplay