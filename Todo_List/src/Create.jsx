import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function Create() {
  const [task,setTask] = useState("");
  const handleAdd = () => {
    console.log("Sending task: ", task )
    axios.post('http://localhost:3000/add',{task : task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err) )
  }

  return (
    <div className='create-form'>
        <input type="text" value={task} placeholder="Enter a new todo..." onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}> Add </button>
    </div>
  )
};
