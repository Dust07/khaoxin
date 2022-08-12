import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import productStyles from "../../styles/ProductPromote.module.scss"

function PromoteItemRight({ item }) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div key={item.name} ref={ref}>
      <div className={`${productStyles.productWrapper} ${inView ? productStyles.animationRTL : ''}`}>
        <div className={productStyles.coloredHighlightRight} style={{ background: `${item.color}` }}></div>
        <div className={`${productStyles.productContentContainer} container`}>
          <div className={productStyles.textContainer}>
            <div className={`${productStyles.coloredHighlightRight} ${productStyles.coloredHighlightShortRight}`} style={{ background: `${item.color}` }}></div>
            <div className={productStyles.shadowText}><p>{item.shadowText}</p></div>
            <h3 className={productStyles.productName}>{item.name}</h3>
            <p className={productStyles.productDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, vel dolorem qui illum corporis mollitia iste hic? Enim ullam eligendi pariatur, vitae nisi, numquam, ex laboriosam placeat reiciendis suscipit veniam!</p>
          </div>

          <div className={productStyles.productImagesContainer}>
            <div className={productStyles.productDisplay}>
              <Image src={item.productImage} width={150} height={250} alt={item.name} />
            </div>
            <div className={productStyles.productImage}>
              <Image src={item.productCoverImage} width={500} height={500} alt={item.name} />
            </div>
            <p className={productStyles.verticalText}>{item.name}</p>
          </div>
        </div>
      </div>

    </div >

  )
}

export default PromoteItemRight  