import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [updatedObject, setUpdatedObject] = useState(null)

  function clickedCategory(selectedCategory) {
    setSelectedCategory(selectedCategory)
  }

  function newTaskForm(newObject) {
    setUpdatedObject(newObject)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} clickedCategory={clickedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={newTaskForm}/>
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} newObject={updatedObject}/>
    </div>
  );
}

export default App;

// App
  // Cateogry Filter
  // New Task Form
  // Task List
    // Task