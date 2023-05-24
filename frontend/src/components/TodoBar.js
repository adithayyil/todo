import { useState } from "react"

const TodoBar = () => {
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const todo = {title, notes}

        const response = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setNotes('')
            setError(null)
            console.log('new todo added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new todo</h3>
            
            <label>Todo:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            
            <label>Notes:</label>
            <textarea 
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />

            <button>Add Todo</button>
        </form>
    )
}


export default TodoBar