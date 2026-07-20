import React from 'react';
import Create from './Create';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);

    

    //getting all the tasks
    useEffect(()=> {
        axios.get("http://localhost:3000/get")
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])


    //function for the tic mark
    const handleEdit = (id)=>{
        axios.put("http://localhost:3000/update/"+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    //function for the handle the delete 
    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/delete/"+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='home'>
        <h2> Todo List </h2>
        <Create/>


        {/* mapping the content in todo */}
        {
            todos.length === 0 
            ?
            <div>
                <h2>No Records yet</h2>
            </div>
                
            :
                todos.map(todo => ( 
                    <div key={todo._id} className='task'>
                        <div className='checkbox'  onClick={()=> handleEdit(todo._id)}>
                            {todo.done?
                            <BsFillCheckCircleFill className='icon'/>
                        :
                            <BsCircleFill className='icon'/>
                        }
                            <p className={todo.done ? "line_throughs" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id) }/></span>
                        </div>
                    </div>
                ))
        }
    </div>
  )
};


export default Home