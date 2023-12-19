import { useState } from 'react'
import './App.css'
import UseReducer from './components/concepts/UseReducer'
import TodoApp from './components/concepts/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
    </>
  )
}

export default App
