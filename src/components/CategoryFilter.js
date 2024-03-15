import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, clickedCategory}) {
  const [isSelected, setIsSelected] = useState(null)

  function handleButton(category) {
    setIsSelected(category)
    selectedCategory = category
    clickedCategory(selectedCategory)
  }

  const categoryButtons = categories.map((category) => (
    <div key={category}>
      <button className={category === isSelected ? 'selected' : ''}
      onClick={() => handleButton(category)}>
        {category}
      </button>
    </div>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
