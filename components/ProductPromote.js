import Image from 'next/image'
import productStyles from "../styles/ProductPromote.module.scss"
import blueDrink from "../public/assets/blue-drink.png"
import blueDrinkCover from "../public/assets/blue-drink-cover.jpg"
import PromoteItemLeft from './smallersComponents/PromoteItemLeft'
import PromoteItemRight from './smallersComponents/PromoteItemRight'


function ProductPromote() {
  const productPromote = [
    {
      name: "Blue Drink",
      productImage: blueDrink,
      productCoverImage: blueDrinkCover,
    }
  ]
  return (
    <section className={productStyles.sectionProductPromote}>
      <PromoteItemLeft item={productPromote[0]}></PromoteItemLeft>
      <PromoteItemRight item={productPromote[0]}></PromoteItemRight>
      <PromoteItemLeft item={productPromote[0]}></PromoteItemLeft>
    </section>
  )
}

export default ProductPromote