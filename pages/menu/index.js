import MenuHero from "../../components/menu_hero/MenuHero"
import MenuDisplay from "../../components/menu_display/MenuDisplay"
import Fade from "../../components/animated_component/Fade"

function Menu() {
  return (
    <Fade>
      <MenuHero />
      <MenuDisplay />
    </Fade>

  )
}

export default Menu