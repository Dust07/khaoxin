import locationStyles from "../LocationDetail.module.scss"
import GetDirectionBtn from "../../reusable/btn/GetDirectionBtn"

function LocationItem({ location }) {
  return (
    <li className={`${locationStyles.listItem} ${locationStyles.selected}`}>
      <p>{location.address}</p>
      <GetDirectionBtn text="Xem bản đồ" getDirectionURL={location.getDirectionURL} />
    </li>
  )
}

export default LocationItem