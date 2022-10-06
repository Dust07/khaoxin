import locationStyles from "./LocationDetail.module.scss"
import { location } from "../../database/location.js"
import LocationItem from "./location_item/LocationItem"

function LocationDetail() {
  return (
    <section className={locationStyles.locationDetailWrapper}>
      <h1 className={locationStyles.h1Text}>Danh sách cửa hàng Khaoxin</h1>
      <div className={`container ${locationStyles.locationContainer}`}>
        <div className={locationStyles.locationListContainer}>
          <ul className={locationStyles.locationList}>
            {location.map(item => {
              return (
                <LocationItem key={item.id} location={item} selected={true} />
              )
            })}
            <li className={locationStyles.listItemComingSoon}>
              <label htmlFor={location.id}>COMING SOON</label>
            </li>
            <li className={locationStyles.listItemComingSoon}>
              <label htmlFor={location.id}>COMING SOON</label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default LocationDetail