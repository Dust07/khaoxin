import locationStyles from "./LocationDetail.module.scss"
import LocationMap from '../../components/map/LocationMap'
import { location } from "../../database/location.js"
import Image from "next/image"
import { useState } from "react"
import LocationItem from "./location_item/LocationItem"

function LocationDetail() {
  const [selectedLocation, setSelectedLocation] = useState(0)
  return (
    <section className={locationStyles.locationDetailWrapper}>
      <h1 className={locationStyles.h1Text}>Danh sách cửa hàng Khaoxin</h1>

      <div className={`container ${locationStyles.locationContainer}`}>
        <div className={locationStyles.highlightImage}>
          <h2 className={locationStyles.h3Text}>{location[selectedLocation].name}</h2>
          <Image src={location[selectedLocation].image} alt={location[selectedLocation].name} />
        </div>

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

        <div className={locationStyles.mapContainer}>
          <LocationMap location={location[0]} showModal={false} />
        </div>

      </div>

    </section>
  )
}

export default LocationDetail