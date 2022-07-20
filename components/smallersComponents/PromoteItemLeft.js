import Image from 'next/image'
import productStyles from "../../styles/ProductPromote.module.scss"

function PromoteItemLeft({ item }) {

  return (
    <div className={productStyles.productWrapper}>
      <div className={productStyles.coloredHighlight} style={{ background: `${item.color}` }}></div>
      <div className={`${productStyles.productContentContainer} container`}>
        <div className={productStyles.productImagesContainer}>
          <p className={productStyles.verticalText}>{item.name}</p>
          <div className={productStyles.productImage}>
            <Image src={item.productCoverImage} width={500} height={500} alt={item.name} />
          </div>
          <div className={productStyles.productDisplay}>
            <Image src={item.productImage} width={150} height={250} alt={item.name} />
          </div>
        </div>

        <div className={productStyles.textContainer}>
          <div className={productStyles.shadowText}><p>{item.shadowText}</p></div>
          <div className={`${productStyles.coloredHighlight} ${productStyles.coloredHighlightShort}`} style={{ background: `${item.color}` }}></div>
          <h3 className={productStyles.productName}>{item.name}</h3>
          <p className={productStyles.productDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, vel dolorem qui illum corporis mollitia iste hic? Enim ullam eligendi pariatur, vitae nisi, numquam, ex laboriosam placeat reiciendis suscipit veniam!</p>
        </div>
      </div>

    </div >

  )
}

export default PromoteItemLeft  