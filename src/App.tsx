import React, { useState } from 'react';
import './App.css';

interface TodoProps {
  todo: {
    text: string,
    isCompleted: boolean
  },
  index: number,
  completeTodo: (index: number) => void,
  removeTodo: (index: number) => void,
}

const Todo: React.FC<TodoProps> = ({todo, index, completeTodo, removeTodo}) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

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
      <input type="text" className="input" placeholder="Add Todo..." value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: true },
    { text: "Meet friend for lunch", isCompleted: true },
    { text: "Build really cool todo app", isCompleted: false }
  ])

  const addTodo = (text: string) => {
    const newTodos = [...todos, {text, isCompleted: false}]
    setTodos(newTodos)
  }

  const completeTodo = (index: number) =>{
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}  completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
