import menuStyles from "./MenuDisplay.module.scss"

function MenuDisplay() {
  return (
    <div className={menuStyles.menuWrapper}>
      <div className={`container ${menuStyles.menu}`}>
        <div className={menuStyles.menuTitle}>
          <h1>KHAOXIN MENU</h1>
        </div>
        <div className={menuStyles.menuDisplay}>
          <div className={menuStyles.category}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div className={menuStyles.item}>
            Item 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDisplay