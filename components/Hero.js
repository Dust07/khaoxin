import Image from "next/image"
import logo from "../public/assets/logo.svg"
import heroStyles from "../styles/Hero.module.scss"

function Hero() {
  return (
    <section className={heroStyles.sectionHero}>
      <div className="container">
        <Image src={logo} width={500} height={500} alt="khaoxin logo" />
      </div>
    </section>
  )
}

export default Hero