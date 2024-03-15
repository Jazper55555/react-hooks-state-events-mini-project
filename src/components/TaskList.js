import React, {useState, useEffect} from "react";
import Task from './Task'

function TaskList({tasks, selectedCategory, newObject}) {
  const [taskDisplay, setTaskDisplay] = useState(tasks)
  
  useEffect(() => {
    const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);
    setTaskDisplay(filteredTasks);
  }, [selectedCategory, tasks]);

  useEffect(() => {
    setTaskDisplay(tasks);
  }, [tasks]);
  // const newTasks = [...taskDisplay, newObject]
  // const filteredTasks = selectedCategory === 'All' ? taskDisplay : taskDisplay.filter((task) => task.category === selectedCategory)

  const taskItems = taskDisplay.map((task) => (
    <div key={task.text}>
      <Task text={task.text} category={task.category} handleDelete={handleDelete}/>
    </div>
  ))

    function handleDelete(text) {
    const updatedTasks = taskDisplay.filter((task) => task.text !== text)
    console.log(updatedTasks)
    setTaskDisplay(updatedTasks)
  }

  useEffect(() => {
    if (newObject) {
      setTaskDisplay((prevTasks) => [...prevTasks, newObject]);
    }
  }, [newObject]);

  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;