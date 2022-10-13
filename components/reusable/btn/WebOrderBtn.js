import Image from 'next/image'
import btnStyles from "./Button.module.scss"
import webOrder from "../../../public/assets/weborder.svg"

function WebOrderBtn() {
  const handleClick = () => {
    window.open("https://order.ipos.vn/menu?pos_parent=BRAND-CVAI&pos_id=60437&source=FB_MESSAGE")
  }
  return (
    <button className={btnStyles.webOrderBtn}>
      <Image src={webOrder} alt="web-order-btn" onClick={() => handleClick()} />
    </button>
  )
}

export default WebOrderBtn