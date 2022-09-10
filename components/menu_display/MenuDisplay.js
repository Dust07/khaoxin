import { useEffect, useState } from "react"
import { categoryList } from "../../database/category"
import { productList } from "../../database/product"
import menuStyles from "./MenuDisplay.module.scss"
import CategoryBtn from "../reusable/btn/categoryBtn"
import Item from "../reusable/item/Item"

function MenuDisplay() {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);


  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const findProductBasedOnCategory = (categoryId) => {
    let currentList = [];
    if (categoryId === 0) {
      for (let i = 1; i < categoryList.length; i++) {
        currentList.push(
          {
            category: categoryList[i],
            products: productList.filter(product => product.category === parseInt(categoryList[i].id))
          })
      }
    }
    else {
      currentList.push(
        {
          category: categoryList[categoryId],
          products: productList.filter(product => product.category === parseInt(categoryId))
        }
      )
    }
    return currentList;
  }

  useEffect(() => {
    const currentList = findProductBasedOnCategory(parseInt(selectedCategory));
    setSelectedProducts(currentList);
  }, [selectedCategory])

  return (
    <section className={menuStyles.menuWrapper}>
      <div className={`container`}>
        {/* <div className={menuStyles.menuTitle}>
          <h1>KHAOXIN MENU</h1>
        </div> */}
        <div className={menuStyles.menuDisplay}>
          <div className={menuStyles.category}>
            <ul className={menuStyles.categoryList}>
              {categoryList.map(category => {
                return (
                  <li
                    key={category.id}
                    onClick={handleSelectCategory}
                    value={category.id}
                    className={`${menuStyles.categoryItem} ${selectedCategory == category.id ? menuStyles.selected : ""}`}>
                    {category.name}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={menuStyles.itemSection}>
            {selectedProducts.map(item => {
              return (
                <div key={item.category.id} className={menuStyles.categorySection}>
                  <h3 className={`${menuStyles.categoryTitle} ${menuStyles.h3Text}`}>{item.category.name}</h3>
                  <div className={menuStyles.item}>
                    {item.products.map(product => {
                      return (
                        <Item key={product.id} product={product} />
                      )
                    })}
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuDisplay