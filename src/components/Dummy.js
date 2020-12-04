/*
What is a Hook? Hooks are nothing but functions coming from react package
Using React Hooks, You can replace RCC with RFC
1) useState (Which helps us to define a state in a RFC)

*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Dummy() {
    const [todos, setTodos] = useState({});
    //Similar to ComponentDidMount, we have useEffect Hook 
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(res.data);
        }
        fetchData();
    })
    return (
        <div>
            <h1>Does it matter!</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <div >
                        <p><b>To Do ID : </b> {todo.id}</p>
                        <p>ToDo Item is : {todo.title}</p>
                        <p>Status of the Task : <b>{todo.completed ? "True" : "False"}</b></p>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Dummy;