import React, { useState } from 'react';
import './App.css';

interface TodoProps {
  todo: {text: string},
}

const Todo: React.FC<TodoProps> = ({todo}) => <div className="todo">{todo.text}</div>

const TodoForm: React.FC<{addTodo: (text:string) => void}> = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ])

  const addTodo = (text: string) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
