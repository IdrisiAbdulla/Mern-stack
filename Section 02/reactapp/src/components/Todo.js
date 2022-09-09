import React from 'react'
import { useState } from 'react'
import "./Todo.css"

const Todo = () => {

   
    const [todoList, setTodoList] = useState(["Eat breakfast","eat Lunch",'eat dinner']);
    const [task, setTask] = useState("");

    const addNewTask=()=>{
        //todoList.push("new Task") this is a wrong way
        if (task){
        setTodoList([...todoList,task]);
        setTask('');
        }
    }
    const removeTask=(index)=>{
        let temp=todoList;
        temp.splice(index,1);
        //update
        //temp[i]=newValue;
        setTodoList([...temp]);
        // alert(index);

    }

    const showTodoList=()=>{
        // return <h1>My Todo List</h1>
        return todoList.map((task,index)=><div className='d-flex task-body justify-content-between'>
            <p>{task}</p>
            <button className='btn btn-danger' onClick={()=>{removeTask(index)}}><i className='fas fa-trash'></i> </button>

        </div>)
    }
  return (
    <div className='container'>
        <div className="card mt-5">
            <div className="card-body">
                <h3>Todo List</h3>
                <hr />
                <div className="input-group" >
                    <input className="form-control" value={task}onChange={(e)=>{setTask(e.target.value)}} />
                    <button onClick={addNewTask} className='btn btn-primary input-group-append'>Add Task</button>
                </div>
                {showTodoList()}
            </div>
        </div>
    </div>
  )
}

export default Todo