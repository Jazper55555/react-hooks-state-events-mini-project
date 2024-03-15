import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formInput, setFormInput] = useState('')
  const [category, setCategory] = useState('Code')

  const handleOptionCategories = categories.filter(category => category !== 'All').map(category => 
    <option key={category}>{category}</option>
  )

  function handleInput(event) {
    setFormInput(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newObject = {
      text: formInput,
      category: category
    }
    onTaskFormSubmit(newObject)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formInput} onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {handleOptionCategories}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
