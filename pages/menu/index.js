import MenuHero from "../../components/menu_hero/MenuHero"
import MenuDisplay from "../../components/menu_display/MenuDisplay"
import Fade from "../../components/animated_component/Fade"
import Head from "next/head"

function Menu() {
  return (
    <>
      <Head>
        <title>Khaoxin Menu</title>
        <meta name="description" content="Điểm qua những món nước độc đáo của Khaoxin ngay!" />
      </Head>
      <Fade>
        {/* <MenuHero /> */}
        <MenuDisplay />
      </Fade>
    </>

  )
}

export default Menu