import './App.css';
import {Task} from "./Task"
import {useState} from "react"

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")
  const [compTask, setCompTask] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task])
  }

  const completedTask = (id) => {
    todoList.forEach((obj) => {
      if(id === obj.id) {
        setCompTask(()=>{
          const temp = [...compTask];
          obj.completed = true;
          temp.push(obj);
          return temp;
        });
        console.log(compTask)
      }
    });
  }

  const randomFunction = ()=> {
    console.log('Called');
  }

  const deleteTask = (id) => { 
        const newTodoList = todoList.filter((task) => task.id !== id)
        setTodoList(newTodoList)
  }

  const changeColor = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id) {
        return {...task, completed: true}
      }
      else {
        return task
      }
    }))
  }

  return (
    <div className="App">
      <div className = "addTask">
        <input onChange={handleChange}></input>
        <button onClick = {addTask}>
            Add Task
        </button>
      </div>
      <div className = "list">
        <h1>PENDING TASK</h1>
        {todoList.map((task) => {
          return (
            <div>
              <Task id = {task.id} taskName = {task.taskName} completed = {task.completed } changeColor = {changeColor} deleteTask = {deleteTask} onComplete = {completedTask}/>
            </div>
            
          );
        })}
      </div>
      <div>
        <h1>Completed Task</h1>
        {compTask.map((task) => {
          return (
            <div>
              <Task id = {task.id} taskName = {task.taskName} completed = {task.completed} deleteTask = {deleteTask}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
