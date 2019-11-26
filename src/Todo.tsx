import React from 'react';

interface TodoProps {
  todo: {
    text: string,
    isCompleted: boolean
  },
  index: number,
  completeTodo: (index: number) => void,
  removeTodo: (index: number) => void,
}

export const Todo: React.FC<TodoProps> = ({todo, index, completeTodo, removeTodo}) => {
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