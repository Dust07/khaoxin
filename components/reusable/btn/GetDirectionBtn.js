import btnStyles from "./Button.module.scss"

function GetDirectionBtn({ text, getDirectionURL }) {
  const handleClick = (url) => {
    window.location.href(url);
  }
  return (
    <button className={`${btnStyles.getDirectionBtn}`} onClick={() => handleClick(getDirectionURL)}>
      <span>{text}</span>
    </button>
  )
}

export default GetDirectionBtn