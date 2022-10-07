import Hero from "../../components/hero/Hero"
import Fade from "../../components/animated_component/Fade"
import AboutUsContent from "../../components/about_us/AboutUsContent"
import Head from "next/head"

function AboutUs() {
  return (
    <>
      <Head>
        <title>About Khaoxin</title>
        <meta name="description" content="Về chúng tôi" />
      </Head>
      <Fade>
        <Hero />
        <AboutUsContent />
      </Fade>
    </>
  )
}

export default AboutUs