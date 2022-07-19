import Image from 'next/image'
import productStyles from "../../styles/ProductPromote.module.scss"

function PromoteItem({ item }) {

  return (
    <div className={productStyles.productWrapper}>
      <div className={productStyles.productHighlight}></div>
      <div className={productStyles.productHighlightWhiteSpace}></div>
      <div className="container">
        <div className="row">
          <div className={`${productStyles.productImagesWrapper} col-6`}>
            <Image src={item.productCoverImage} width={400} height={400} alt={`${item.name}-image`}></Image>
            <div className={productStyles.productHighlightSideImage}>
              <Image src={item.productImage} width={200} height={200} alt={`${item.name}-image`}></Image>
            </div>
          </div>
          <div className={`col`}>
            <h2>Product Descriptions/Name</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis voluptate ad, explicabo exercitationem quae vitae reiciendis id molestias, vel architecto quos sed repellendus earum doloribus rem aut mollitia natus.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PromoteItem  