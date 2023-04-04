import React, { FC, ChangeEvent, useState } from 'react';
import {ITask} from './interfaces'
import './App.css'
import TodoTask from './Component/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadLine, setDeadLine] = useState<number>(+ "")
  const [todo, setTodo] = useState<ITask[]>([])

  const handleClick = (event: ChangeEvent<HTMLInputElement>): void => {
     (event.target.name === 'task') ? setTask(event.target.value) : setDeadLine(+(event.target.value))
    
  }

  const addTask = ():void=>{
    const newTask = {taskName:task, deadLine: deadLine}
    setTodo([...todo, newTask])
    setDeadLine(+"")
    setTask("")
  }

  const deleteTask = (taskId:string):void=>{
    setTodo(todo.filter((task)=>{
      return task.taskName !== taskId
    }))
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='input-box'>

          <input type="text"
           onChange={handleClick}
           value={task}
           name="task"
           placeholder='Task...' />

          <input type="number" 
          onChange={handleClick} 
          value={deadLine}
          name="deadline" 
          placeholder='Deadline (in days)..' />

        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='toDolist'>
        {
          todo.map((task:ITask, key:number)=>{
            return <TodoTask key={key}  task={task} deleteTask={deleteTask}/>
          })
        }
      </div>

    </div>
  );
}

export default App;
