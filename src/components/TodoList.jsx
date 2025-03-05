import React, { useState } from "react";

const TodoList = () => {
 // Initialize the todos state as an empty array
 const [todos, setTodos] = useState([]);

 // Initialize the newTodo state as an empty string
 const [newTodo, setNewTodo] = useState('');

  // Function to handle the input change
  const handleInputChange = (e) => {
    // Code and complete the logic to update the newTodo state with the value from the input field
    setNewTodo(e.target.value)
  };

  // Function to add a new todo
  const handleAddTodo = () => {
    //  Code and complete the logic to add the new todo if it's not empty
    if(todos!==''){
      setTodos([...todos,{text:newTodo,completed:false}])
      console.log(todos)
      
    }
    setNewTodo("")
  };

  // Function to toggle the completion status of a todo
  const handleToggleComplete = (index) => {
    // Code and Complete the logic to toggle the 'completed' status of the selected todo
    todos.map((todo,i)=>{
      if(i==index){
        todo.completed=true
      }
    })
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    //  Code and complete the logic to remove the selected todo from the list
    const filtered = todos.filter((todo,i)=>i!==index)
    setTodos(filtered)
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        // Ensure this input field is controlled via newTodo state
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;