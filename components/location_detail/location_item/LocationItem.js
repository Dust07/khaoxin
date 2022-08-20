import locationStyles from "../LocationDetail.module.scss"

function LocationItem({ location }) {
  return (
    <li className={`${locationStyles.listItem} ${locationStyles.selected}`}>
      <input id={location.id} name="locationItem" type="radio" value={location.id} checked />
      <label htmlFor={location.id}>{location.address}</label>
    </li>
  )
}

export default LocationItem