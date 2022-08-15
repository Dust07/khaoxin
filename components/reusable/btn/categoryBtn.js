import btnStyles from "./Button.module.scss"

function CategoryBtn({ text }) {
  return (
    <button className={btnStyles.categoryBtn}>
      <span>{text}</span>
    </button>
  )
}

export default CategoryBtn