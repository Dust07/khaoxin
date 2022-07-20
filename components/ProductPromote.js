import productStyles from "../styles/ProductPromote.module.scss"
import PromoteItemLeft from './smallersComponents/PromoteItemLeft'
import PromoteItemRight from "./smallersComponents/PromoteItemRight"
import { productPromote } from "../database/promoteProduct"

function ProductPromote() {

  return (
    <section className={productStyles.sectionProductPromote}>
      <div className={productStyles.productTitle}>
        <h2>OUR SIGNATURES</h2>
      </div>
      {productPromote.map((product, index) => {
        if (index === 1) return <PromoteItemRight key={index} item={product}></PromoteItemRight>
        return <PromoteItemLeft key={index} item={product}></PromoteItemLeft>
      })}
    </section>
  )
}

export default ProductPromote