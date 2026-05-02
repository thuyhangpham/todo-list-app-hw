import React, { useEffect } from 'react'
import Create from './Create'


function Home() {
        const [todo, setTodo] = useState([])
        useEffect(() => {
            axios.get('http://localhost:3000/get')
                .then(result => setTodo(result.data))
                .catch(err => console.log(err))
        }, [])

        const handleEdit = (id) => {
            axios.put('http://localhost:3000/update/'+id)
                .then(result => {
                    location.reload()
                })
                .catch(err => console.log(err))
        }

        const handleDelete = (id) => {
            axios.put('http://localhost:3000/delete/'+id)
                .then(result => {
                    location.reload()
                })
                .catch(err => console.log(err))  

        }

    return (
  <div className="home">
    <h1>Todo List</h1>
    <Create />
    <br />

    {todo.length === 0 ? (
      <h2>No todos yet!</h2>
    ) : (
      todo.map((item) => (
        <div className="task" key={item._id}>
          
          <div 
            className="checkbox" 
            onClick={() => handleEdit(item._id)}
          >
            {item.done ? (
              <BsFillCheckCircleFill className="icon" />
            ) : (
              <BsCircleFill className="icon" />
            )}

            <p className={item.done ? "line-through" : ""}>
              {item.task}
            </p>
          </div>

          <div>
            <span>
              <BsFillTrashFill
                className="icon"
                onClick={() => handleDelete(item._id)}
              />
            </span>
          </div>

        </div>
      ))
    )}
  </div>
);
}

export default Home