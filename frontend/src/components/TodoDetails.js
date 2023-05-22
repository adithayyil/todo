const TodoDetails = ({ todo }) => {
    return (
        <div className="todo-details">
            <h3>{todo.title}</h3>
            <p>{todo.notes}</p>
            <p>{todo.createdAt}</p>
        </div>
    )
}

export default TodoDetails