import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // todos is the initial array of todo tasks (empty)
  // todo is the set of current task being passed into todos
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  let idArray = [];


  // hook that retrieves the below
  React.useEffect(() => {
    let jsToJson = localStorage.getItem("todos");
    let loadedTodos = JSON.parse(jsToJson);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);
  
  // hook that saves the todo list locally
  React.useEffect(() => {
    let jsToJson = JSON.stringify(todos);
    localStorage.setItem("todos", jsToJson);
  }, [todos]);

  // // hook that retrieves the above
  // React.useEffect(() => {
  //   const jsToJson = localStorage.getItem("todos")
  //   const loadedTodos =JSON.parse(jsToJson)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  function handleSubmit(e) {
    // stop refresh on submit
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo, 
      completed: false,
    };
    // // console.log(newTodo.id)
    // if (typeof(newTodo.id) == Number) {
    //   idArray.push(newTodo.id)
    // }
    // console.log(newTodo.id)
    // console.log(idArray)
   
    setTodos([...todos].concat(newTodo));
    // reset to empty string
    setTodo("");
    
  }

  function deleteTodo(id) {
    // filter out todo associated with this id
    let updatedTodos = [...todos].filter((todo) => todo.id != id);

    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  function editTodo(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
      })
      setTodos(updatedTodos);
      setTodoEditing(null);
      setEditingText("");
  }
  return (
    <div className="App">
      <form onSubmit = {handleSubmit}> 
        <input type = "text" onChange = {(e) => setTodo(e.target.value)} value = {todo}/>
        <button type = "submit">Add Todo</button>
      </form>
      {todos.map((todo) => <div key = {todo.id}>
        
        {todoEditing === todo.id ? (<input 
          type = "text" 
          onChange = {(e) => setEditingText(e.target.value)}
          value = {editingText} />) 
          : 
          (<div>{todo.text}</div>)} 
        {/* <div>{todo.text}</div>
        <input 
          type = "text" 
          onChange = {(e) => setEditingText(e.target.value)}
          value = {editingText} /> */}
        
        <button onClick = {() => deleteTodo(todo.id)}>Delete</button>
        <input 
          type = "checkbox" 
          onChange = {() => toggleComplete(todo.id)}
          checked = {todo.completed}/>
        
        {todoEditing === todo.id ? (<button onClick = {() => editTodo(todo.id)}>Submit Edits</button>) : (<button onClick = {() => setTodoEditing(todo.id)}>Edit Todo</button>)}
        {/* <button onClick = {()=> setTodoEditing(todo.id)}>Edit Todo</button>
        <button onClick = {() => editTodo(todo.id)}>Submit Edits </button> */}
      </div>)}
    </div>
  );
  
  };

export default App;
