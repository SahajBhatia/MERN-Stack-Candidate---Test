import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => {a
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const AddTask = () => {
    if (task) {
      axios
        .post("http://localhost:3000/tasks", { text: task, completed: false })
        .then((response) => {
          setTasks([...tasks, response.data]);
          setTask("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const DeleteTask = (id) => {
    axios
      .delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleTask = (id) => {
    const updatedTask = tasks.find((task) => task._id === id);
    updatedTask.completed = !updatedTask.completed;

    axios
      .put(`http://localhost:3000/tasks/${id}`, {
        completed: updatedTask.completed,
        text: updatedTask.text,
      })
      .then((response) => {
        setTasks(
          tasks.map((task) =>
            task._id === id ? { ...task, completed: response.data.completed } : task
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <div className="d1">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={AddTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className={task.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => HandleTask(task._id)}
              />
              {task.text}
              <button onClick={() => DeleteTask(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
