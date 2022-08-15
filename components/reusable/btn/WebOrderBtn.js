import Image from 'next/image'
import btnStyles from "./Button.module.scss"
import webOrder from "../../../public/assets/weborder.svg"

function WebOrderBtn() {
  return (
    <button className={btnStyles.webOrderBtn}>
      <Image src={webOrder} alt="web-order-btn" />
    </button>
  )
}

export default WebOrderBtn