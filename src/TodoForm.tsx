import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text:string) => void
}

export const TodoForm: React.FC<TodoFormProps> = ({addTodo}) => {
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