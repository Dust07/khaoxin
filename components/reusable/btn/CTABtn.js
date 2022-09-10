import btnStyles from "./Button.module.scss"

function CTABtn({ text }) {
  return (
    <button className={`${btnStyles.categoryBtn}`}>
      <span>{text}</span>
    </button>
  )
}

export default CTABtn