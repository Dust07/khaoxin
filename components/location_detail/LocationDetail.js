import locationStyles from "./LocationDetail.module.scss"
import LocationMap from '../../components/map/LocationMap'
import { location } from "../../database/location.js"
import LocationItem from "./location_item/LocationItem"
import { useState } from "react"
import { getLocationOrigin } from "next/dist/shared/lib/utils"

function LocationDetail() {
  const [lat, setLat] = useState('lat')
  const [long, setLong] = useState('long')
  const [count, setCount] = useState(0)
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      setCount((prev) => prev + 1)
    });
  }
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

      <div>
        <p>{lat}</p>
        <p>{long}</p>
        <button onClick={() => getLocation()}>Get location</button>
        <p>Click: {count} times </p>
      </div>
    </section>
  )
}

export default LocationDetail