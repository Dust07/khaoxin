import locationStyles from "./LocationDetail.module.scss"
import LocationMap from '../../components/map/LocationMap'
import { location } from "../../database/location.js"

function LocationDetail() {
  return (
    <div className={locationStyles.locationDetailWrapper}>
      <h1 className={locationStyles.h1Text}>Danh sách cửa hàng Khaoxin</h1>
      <div>
        <div>

        </div>
        <div>
          <LocationMap location={location[0]} />
        </div>
      </div>
    </div>
  )
}

export default LocationDetail