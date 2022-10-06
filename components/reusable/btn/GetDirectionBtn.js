import btnStyles from "./Button.module.scss"
import { isMobile } from "react-device-detect";

function GetDirectionBtn({ text, getDirectionURL }) {
  const handleClick = (url) => {
    if (isMobile) {
      window.location.assign(url);
    } else {
      window.open(url);
    }
  }
  return (
    <button className={`${btnStyles.getDirectionBtn}`} onClick={() => handleClick(getDirectionURL)}>
      <span>{text}</span>
    </button>
  )
}

export default GetDirectionBtn