import Image from "next/image"
import BotToTopFade from "../../animated_component/BotToTopFade"
import mapStyles from "../LocationMap.module.scss"
import closeMark from "../../../public/assets/closemark.svg"

function LocationInfo({ location, handleCloseBtn }) {
  return (
    <BotToTopFade>
      <div className={`${mapStyles.locationInfo}`}>
        <div className={mapStyles.closeButton} onClick={handleCloseBtn}>
          <Image src={closeMark} alt={location.name} layout="fill" />
        </div>

        <Image src={location.image} alt={location.name} height={600} />
        <strong className={mapStyles.locationTitle}>{location.name}</strong>
        <p>{location.address}</p>
        <br></br>
        <p>Tel: {location.phone}</p>
      </div>
    </BotToTopFade>

  )
}

export default LocationInfo