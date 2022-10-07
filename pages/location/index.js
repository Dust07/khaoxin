import Head from "next/head"
import Fade from "../../components/animated_component/Fade"
import LocationDetail from "../../components/location_detail/LocationDetail"

function Location() {
  return (
    <>
      <Head>
        <title>Địa điểm</title>
        <meta name="description" content="Danh sách các chi nhánh của trà sữa Khaoxin" />
      </Head>
      <Fade>
        <LocationDetail />
      </Fade>
    </>
  )
}

export default Location