import btnStyles from "./Button.module.scss"

function CategoryBtn({ text, categoryValue, handleSelectCategory, isSelected }) {
  return (
    <button className={`${isSelected ? btnStyles.categorySelected : ''} ${btnStyles.categoryBtn}`} value={categoryValue} onClick={handleSelectCategory}>
      <span>{text}</span>
    </button>
  )
}

export default CategoryBtn