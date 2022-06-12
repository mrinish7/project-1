import React,{useState} from "react";
import Navbar from "../Navbar";
import TodoList from "./TodoList";


const Thinking = () => {

    const [task, settask] = useState("");

    
    const ChangeMsg = (e) => {
        settask(e.target.value)      
    }

    
    const [todo, setTodo] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        const newTodo = task;
        setTodo([...todo, newTodo])
        settask('')
    }

    const dltItem = (a) => {
        const finalData = todo.filter((curEle, index) =>{
            return index !==a;
        })
        setTodo(finalData)
    }

    return(
        <div>
            <Navbar />
            <h1  className="sub-heading">Thinking Laterally</h1>
            <form className="todo-form" onSubmit={submitHandler}>
                <input className="area-input" id="input-txt" value={task} onChange={ChangeMsg} /> 
                <button className="btn-add">Add</button>
            </form>
            {
                todo.map((value, index) => {
                   return <TodoList key={index} id={index} list={value} onSelect={dltItem} />
                })
            }
        </div>
    )
}

export default Thinking