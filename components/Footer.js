import Image from "next/image"
import footerStyles from "../styles/Footer.module.scss"
import khaoxinLogo from "../public/assets/mock-logo.png"


function Footer() {
  return (
    <section className={footerStyles.footerWrapper}>
      <div>
        <p>Copyright 2022 © KHAOXIN MILK TEA</p>
      </div>
    </section>
  )
}

export default Footer