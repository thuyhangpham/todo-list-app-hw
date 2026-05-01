import React from 'react'
import Create from './Create'


function Home() {
        const [todo, setTodo] = useState([])
    return (
        <div>
            <h2>Todo List</h2>
            <Create />
            {
                todo.length === 0 ? (
                    <p>No todos yet!</p>
                ) : (
                    todo.map(todo => (
                        <div>
                            {todo}
                        </div>
                    ))
                )
            }

        </div>
    )
}

export default Home