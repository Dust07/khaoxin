import locationStyles from "./LocationDetail.module.scss"
// import { location } from "../../database/location.js"
import LocationItem from "./location_item/LocationItem"
import { useEffect, useState } from "react"

function LocationDetail() {
  const [location, setLocation] = useState({ lat: null, lng: null })
  const [errorMessage, setErrorMessage] = useState("")
  useEffect(() => {
    console.log(location)
  }, [location])

  const updatePosition = (position) => {
    console.log(position)
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  const error = () => {
    console.log("GPS ERROR")
    setErrorMessage("GPS DISABLED, PLEASE ENABLE")
  }

  const option = {
    maximumAge: 0
  }

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updatePosition, error, option)
    }
  }

  return (
    <section className={locationStyles.locationDetailWrapper}>
      <h1 className={locationStyles.h1Text}>Danh sách cửa hàng Khaoxin</h1>
      <div className={`container ${locationStyles.locationContainer}`}>
        <div className={locationStyles.locationListContainer}>
          {/* <ul className={locationStyles.locationList}>
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
          </ul> */}
        </div>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={getGeoLocation}>GET CURRENT POSITION</button>
      <p>Lat:{location.lat}</p>
      <p>Lng:{location.lng}</p>
    </section>
  )
}

export default LocationDetail