import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
nvm
    <table class="table bg-dark shadow table-secondary">
  <thead>
    <tr>
      <th scope="col">New Task</th>
      <th scope="col">In Progress</th>
      <th scope="col">Complted</th>git
      <th scope="col">Action</th>

    </tr>

    
  </thead>
  <tbody>

    {

      tasks.map((task, index)=>(
<tr>
  <th className="row" key={index}>{index+1}</th>
      <td>{tasks.id}</td>
      <td>{tasks.description}</td>
<td>
        <button className="btn btn-primary mx-2">View</button>
        <button className="btn btn-outline-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>


</td>
    </tr>
    

    ))
      }
    
    
     <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@yahoo</td>
      <td>        
  <button className="btn btn-primary mx-2">View</button>
  <button className="btn btn-outline-primary mx-2">Edit</button>
  <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
  </div>
    </div>
  )

    }