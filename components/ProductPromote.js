import Image from 'next/image'
import productStyles from "../styles/ProductPromote.module.scss"
import blueDrink from "../public/assets/blue-drink.png"
import blueDrinkCover from "../public/assets/blue-drink-cover.jpg"
import PromoteItem from './smallersComponents/PromoteItem'

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
      <PromoteItem item={productPromote[0]}></PromoteItem>
      <PromoteItem item={productPromote[0]}></PromoteItem>
      <PromoteItem item={productPromote[0]}></PromoteItem>

    </section>
  )
}

export default ProductPromote