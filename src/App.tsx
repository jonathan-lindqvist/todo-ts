import React, { useState } from 'react';
import {Todo} from './Todo'
import {TodoForm} from './TodoForm'

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

export default App
