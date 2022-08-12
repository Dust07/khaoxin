import Image from "next/image"
import benefitStyles from "../Benefit.module.scss"


function BenefitOption({ item }) {
  return (
    <div className={benefitStyles.optionWrapper}>
      <Image src={item.image} alt={item.name} width={100} height={100} />
      <div className={benefitStyles.textContainer}>
        <h3 className={benefitStyles.h3Title}>{item.name}</h3>
        <p className={benefitStyles.descText}>{item.desc}</p>
      </div>
    </div>
  )
}

export default BenefitOption