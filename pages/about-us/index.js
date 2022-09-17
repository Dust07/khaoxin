import Hero from "../../components/hero/Hero"
import Fade from "../../components/animated_component/Fade"
import AboutUsContent from "../../components/about_us/AboutUsContent"

function AboutUs() {
  return (
    <Fade>
      <Hero />
      <AboutUsContent />
    </Fade>
  )
}

export default AboutUs