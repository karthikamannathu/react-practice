import React, { useState } from 'react'

export default function Todo() {
    const [text,setText] = useState('');
    const [todos,setTodos] = useState([])

    function addTodo(){
        if(!text.trim()) return;
            setTodos([...todos,text]);
            setText("");
        
    }
  return (
    <>
        <input value={text} onChange = {(e) => setText(e.target.value)} />
        <button onClick={addTodo}>add</button>
        <ul>  
            {todos.map((todo,index)=>(
              
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </>
  )
}
