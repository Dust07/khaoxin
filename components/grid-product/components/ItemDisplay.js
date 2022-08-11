import Image from "next/image"
import { useState } from "react"
import { animated, useTransition } from "react-spring"
import gridStyles from "../GridProduct.module.scss"


function ItemDisplay({ item }) {
  const [isVisible, setIsVisible] = useState(item.name)

  const transition = useTransition(isVisible, {
    from: {
      x: 100,
      opacity: 0
    },
    enter: {
      x: 0,
      opacity: 1
    },
    leave: {
      x: -100,
      opacity: 1
    },
  })

  return (
    <div key={item.name} className={gridStyles.itemDisplayWrapper}>
      <div className={gridStyles.itemContainer}>
        {transition((style, variable) =>
          variable ?
            <animated.div className={gridStyles.itemImage} style={style}>
              <div className={gridStyles.displayItemBackground} style={{ background: item.color }} ></div>
              <Image className={gridStyles.image} width={200} height={300} src={item.image} alt={item.name} />
            </animated.div> : ''
        )}
        <div className={gridStyles.itemText}>
          <div className={gridStyles.itemTitle}>
            <div className={gridStyles.shadowText}>{item.shadowText}</div>
            <h3 className={gridStyles.name}>{item.name}</h3>
          </div>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDisplay