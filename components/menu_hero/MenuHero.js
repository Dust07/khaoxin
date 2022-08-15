import Image from "next/image"
import menuHeroStyles from "./MenuHero.module.scss"
import webOrder from "../../public/assets/weborder-black.svg"
import greenTick from "../../public/assets/green-tick.svg"
import menuHeroAsset from "../../public/assets/menu-hero-asset.png"
import WebOrderBtn from "../reusable/btn/WebOrderBtn"
import ThirdParty from "../reusable/third_party/ThirdParty"

function MenuHero() {
  return (
    <section className={menuHeroStyles.menuHeroWrapper}>
      <div className={`container ${menuHeroStyles.menuHero}`}>
        <div className={menuHeroStyles.leftSection}>
          <div className={menuHeroStyles.introduction}>
            <p>Đặt hàng trực tiếp thông qua dịch vụ</p>
            <Image src={webOrder} alt="web-order-logo" width={300} height={200} />
          </div>
          <ul className={menuHeroStyles.benefitList}>
            <li>
              <Image src={greenTick} alt="bullet-point" width={50} />
              <p>Freeship cho tất cả các đơn, chỉ cần đặt hàng và nhân viên của quán sẽ trực tiếp giao ngay cho bạn. Freeship cho tất cả các đơn, chỉ cần đặt hàng và nhân viên của quán sẽ trực tiếp giao ngay cho bạn</p>
            </li>
            <li>
              <Image src={greenTick} alt="bullet-point" width={50} />
              <p>Freeship cho tất cả các đơn, chỉ cần đặt hàng và nhân viên của quán sẽ trực tiếp giao ngay cho bạn</p>
            </li>
          </ul>
          <div className={menuHeroStyles.CTA}>
            <WebOrderBtn />
          </div>

          <div className={menuHeroStyles.thirdPartyWrapper}>
            <p>hoặc đặt ngay trên các ứng dụng giao hàng</p>
            <ThirdParty itemWidth={200} />
          </div>
        </div>
        <div className={menuHeroStyles.rightSection}>
          <Image src={menuHeroAsset} alt="hero-image" height={800} width={500} />
        </div>
      </div>
    </section>
  )
}

export default MenuHero