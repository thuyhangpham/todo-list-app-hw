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
        <div className= 'home'>
            <h1>Todo List</h1>
            <Create />
            <br/>
            {
                todo.length === 0 
                ?
                <div><h2>No todos yett!</h2></div> 
                :  
                todo.map(todo => (
                        <div className ='task'>
                            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done ? 
                                        <BsFillCheckCircleFill className='icon'> </BsFillCheckCircleFill>
                                : <BsCircleFill className='icon'/>
                                }
                                <p className={todo.done ? 'line through' : ''}> {todo.task} </p>
                            </div>
                            <div>
                                <span><BsFillTrashFill className='icon' 
                                    onClick={() => handleDelete(todo._id)}/> </span>
                            </div>
                        </div>
                    ))
                
            }

        </div>
    )
}

export default Home