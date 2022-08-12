import benefitStyles from "./Benefit.module.scss"
import BenefitOption from "./components/BenefitOption"
import { benefitList } from "../../database/benefit"

function Benefit() {
  return (
    <section className={benefitStyles.benefitWrapper}>
      <div className={`container ${benefitStyles.benefit}`}>
        {benefitList.map(benefit => {
          return (
            <BenefitOption key={benefit.id} item={benefit} />
          )
        })}
      </div>
    </section >
  )
}

export default Benefit