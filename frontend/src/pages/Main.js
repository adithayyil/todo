import { useEffect, useState } from "react"

import TodoDetails from '../components/TodoDetails'

const Main = () => {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
      const fetchTodos = async () => {
        const response = await fetch('/api/todos')        
        console.log(response)
        const json = await response.json()

        if (response.ok) {
          setTodos(json)
        }
      }
  
      fetchTodos()
    }, [])


    return (
        <div className="home">
            <div className="todos">
                {todos && todos.map((todo) => (
                    <TodoDetails key={todo._id} todo={todo} />
                ))}
            </div>
        </div>
    )
}

export default Main