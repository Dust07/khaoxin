import Image from 'next/image'
import productStyles from "../../styles/ProductPromote.module.scss"

function PromoteItem({ item }) {

  return (
    <div className={productStyles.productWrapper}>
      <div className={productStyles.productContent}>
        <div className={productStyles.productHighlight}></div>
        <div className="container-fluid">
          <div className="row">
            <div className={`${productStyles.productImagesWrapper} col-7`}>
              {/* <div className={productStyles.sideText}>
                <p className={productStyles.productName}>BRAND</p>
                <div className={productStyles.sideLine}></div>
              </div> */}
              <Image src={item.productCoverImage} width={500} height={600} alt={`${item.name}-image`}></Image>
              <div className={productStyles.productHighlightSideImage}>
                <Image src={item.productImage} width={300} height={300} alt={`${item.name}-image`}></Image>
              </div>
            </div>
            <div className={`${productStyles.productTextWrapper} col`}>
              <div className={productStyles.productHighlightWhiteSpace}></div>
              <h2>Product Descriptions/Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis voluptate ad, explicabo exercitationem quae vitae reiciendis id molestias, vel architecto quos sed repellendus earum doloribus rem aut mollitia natus.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default PromoteItem  