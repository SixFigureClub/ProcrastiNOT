
// import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';




        const TaskList = () => {

          let navigate = useNavigate()

  
       

          const [tasks, setTasks] = useState([]);
      // const [description, setfirst] = useState(second)
          
          const {id} = useParams()
          
              useEffect(()=>{
                console.log("Coding with Rina");
                loadTasks();

              }, [])
          
              const loadTasks=async()=>{
          
                    const results =await axios.get("http://localhost:8080/login/task/alltasks")
                    //  console.log(results.data);
                      setTasks(results.data)
          
              };
          
              //Delete Function
          
              const deleteTask =async(id)=>{
          
                await axios.delete(`http://localhost:8080/login/task/${id}`)
                //  console.log(results.data);
                //   setTasks(results.data)
                  setTasks(deleteTask.data)


                  loadTasks()
          
          };
        //   navigate('/list');

    
            
        
return (


    <div>
          <h1>Task List</h1>
          
  <div className='container '>


    <div className='welcome'>
  <div className='py-4'>

         
      <ul className='card'>

         {tasks.map((tasks,id) =>(


        //  <input type="radio" name="tasks" th:value="${job.id}">

           <li key={id}>{tasks.description}
           
           {/* <button className="btn btn-info mx-2">View</button> */}
              <Link className="btn btn-outline-primary mx-2" to={`/edit/${tasks.id}`}>Edit</Link>
              <button className="btn btn-danger mx-2" onClick={()=> deleteTask(tasks.id)}>Delete</button>




           
           </li>


         ))}
       </ul>
       


          

<Link type="submit" className="btn btn-primarybtn-outline-light d-grid" data-bs-toggle="button" to='/addtask'>Add Task</Link>

</div>
</div>
</div>
      </div>      
 );

}


export default TaskList