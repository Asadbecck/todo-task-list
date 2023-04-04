import React from 'react'
import { ITask } from '../interfaces'
import '../App.css'

interface Props {
    task?: ITask;
    deleteTask(taskId: string):void;
}


const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div className='task'>
            <div className="contexts">
                <span>{task?.taskName}</span>
                <span> {task?.deadLine} days</span>
            </div>
            <button onClick={() => {deleteTask(task?.taskName ?? "no text found")}}>
                Remove Task
                </button>
        </div>
    )
}

export default TodoTask