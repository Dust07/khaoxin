import Fade from "../../components/animated_component/Fade"
import Footer from "../../components/layout/footer/Footer"
import Header from "../../components/layout/header/Header"
import LocationDetail from "../../components/location_detail/LocationDetail"

function index() {
  return (
    <Fade>
      <LocationDetail />
    </Fade>
  )
}

export default index