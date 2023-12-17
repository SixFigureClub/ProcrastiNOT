import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

const [tasks, setTasks] = useState([]);
    useEffect(()=>{
      // console.log("Coding with Rina");
      loadTasks();
    }, [])

    const loadTasks=async()=>{

          const results =await axios.get("https://localhost:8080/api/task")
          console.log(results);

    };
  
  return (
    <div className='container '>
    <div className='py-4'>

    <table class="table bg-dark shadow table-secondary">
    {/* <table class="table table-striped table-dark"> */}

    <thead class="thead-dark">
    <tr>
      <th scope="col">New Task</th>
      {/* <th scope="col">In Progress</th>
      <th scope="col">Complted</th> */}
      <th scope="col">Action</th>

    </tr>

    
  </thead>
  <tbody>

    {

      tasks.map((task, index)=>(
<tr>
  <th className="row" key={index}>{index+1}</th>
      <td>{task.newtask}</td>
      <td>{task.Action}</td>
   </tr>
    
    )
    )}

    <tr>
      <td>Rina</td>
      
      <td>        
              <button className="btn btn-info mx-2">View</button>
              <button className="btn btn-outline-primary mx-2">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
      </td>
    
    </tr>
    
  </tbody>
</table>



<input type="email" className="form-control" placeholder="Try Typing" />
  <Link className="btn btn-outline-success" type="submit" to="/">Add Task</Link>


  </div>
    </div>
  )

    }