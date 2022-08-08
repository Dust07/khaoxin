import { useState } from 'react';
import PromoteItemLeft from './smallersComponents/PromoteItemLeft'
import PromoteItemRight from "./smallersComponents/PromoteItemRight"
import { productCategory } from "../database/productCategory"
import productStyles from "../styles/ProductPromote.module.scss"
import Image from 'next/image';

function ProductPromote() {

  const [selected, setSelected] = useState(0);

  //Highlight selected category
  const handleSelectCategory = (event) => {
    setSelected(event.target.value);
  }

  return (
    <section className={productStyles.sectionProductPromote}>

      <div className={productStyles.productTitle}>

        <ul className={`container ${productStyles.productCategory}`}>
          {productCategory.map((category) => {
            return (
              <li
                key={category.id}
                value={category.id}
                className={`${selected === category.id ? productStyles.selected : ''} ${productStyles.categoryOption}`}
                onClick={handleSelectCategory}
              >
                <div className={productStyles.categoryImage}>
                  <Image src={category.image} alt={category.name}></Image>
                </div>
                <div className={productStyles.categoryText}>{category.name}</div>
              </li>
            )
          })}
        </ul>

      </div>

      {productCategory[selected].productPromote.map((product, index) => {
        if (index === 1) return <PromoteItemRight key={index} item={product}></PromoteItemRight>
        return <PromoteItemLeft key={index} item={product}></PromoteItemLeft>
      })}

    </section>
  )
}

export default ProductPromote