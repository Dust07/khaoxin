import Image from "next/image"
import thirdPartyStyles from "./ThirdParty.module.scss"
import { thirdPartyList } from "../../../database/thirdParty"

function ThirdParty({ itemWidth }) {
  return (
    <ul className={thirdPartyStyles.thirdPartyList}>
      {thirdPartyList.map(brand => {
        return (
          <li key={brand.id}>
            <Image src={brand.image} alt={brand.name} width={itemWidth} />
          </li>
        )
      })}
    </ul>
  )
}

export default ThirdParty