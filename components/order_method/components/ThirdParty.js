import Image from "next/image"
import orderStyles from "../OrderMethod.module.scss"
import { thirdPartyList } from "../../../database/thirdParty"

function ThirdParty() {
  return (
    <section className={orderStyles.thirdPartyWrapper}>
      <div className={`container ${orderStyles.thirdParty}`}>
        <h3 className={orderStyles.h3Text}>Khaoxin đã có mặt trên các ứng dụng</h3>
        <ul className={orderStyles.thirdPartyList}>
          {thirdPartyList.map(brand => {
            return (
              <li key={brand.id}>
                <Image src={brand.image} alt={brand.name} width={300} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ThirdParty