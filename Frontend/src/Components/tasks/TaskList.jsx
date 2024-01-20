
// // import './index.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';


//         const TaskList = () => {

//           let navigate = useNavigate()

//           const [tasks, setTasks] = useState([]);
          
//           const {id} = useParams()
          
//               useEffect(()=>{
//                 // console.log("Coding with Rina");
//                 loadTasks();

//               }, [])
          
//               const loadTasks=async()=>{
          
//                     const results =await axios.get("http://localhost:8080/login/task/alltasks")

//                       console.log(results.data);
//                       setTasks(results.data)
          
//               };

          
//               //Delete Function
          
//               const deleteTask =async(id)=>{
          
//                 await axios.delete(`http://localhost:8080/login/task/${id}`)
                
//                   setTasks(deleteTask.data)
//                   loadTasks()
//                   // alert(message)
          
//           };

    
            
        
// return (

//   <>    
      
// <div className='container mt-5'>
// <div className='row'>
// <div className='col-md-12'>
// <div className='card'>
// <div className='card-header'>
// <form className="d-flex justify-center" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//   <h2>Task List 
//   <Link to="/addtask" className='btn btn-success float-end'>Add Task</Link>
// </h2>

// </div>
// <div className='card-body'>

// {/* <ul className="list-group">

// {tasks.map((tasks,id) =>(

//   <li className="list-group-item" key={id}>

//     <input class="form-check-input me-1" type="checkbox" value={tasks.description} id={id} />
//     <label class="form-check-label stretched-link" for={id}>{tasks.description}</label>

//      <button className="btn btn-danger mx-2 float-end" onClick={()=> deleteTask(tasks.id)}>Delete</button>

//     <Link className="btn btn-outline-primary mx-2 float-end" to={`${tasks.id}`}>Edit</Link>


//   </li>
  
// ))}

// </ul> */}




//  {/* <h3>Delete Task</h3> */}

           
 


   
//   <table className='table table-striped'>
//     <thead>
//       </thead>
//     <tbody>

//               {tasks.map((tasks, id) =>(
//                 <tr key={id}>  

//         <td >{tasks.description}</td>

//         <td> <Link className="btn btn-secondary mx-2" to='/action'>Action</Link> </td>
//        <td> <Link className="btn btn-outline-primary mx-2 " to={`/task/${tasks.id}`}>Edit</Link> </td>



//       <td> <Link to='/alert' className="btn btn-danger mx-2"  onClick={()=> deleteTask(tasks.id)}>Delete</Link>
//           </td>
//           {/* <td>  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button> */}

    
//      </tr>

     
//       ))}
//     </tbody>

//   </table> 

// </div>

// </div>

// </div>

// </div>
//     </div>  
//   </>
//  )

// }


//  export default TaskList



// import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';


        const TaskList = () => {

          let navigate = useNavigate()

          const [tasks, setTasks] = useState([]);
          
          const {id} = useParams()
          
              useEffect(()=>{
                // console.log("Coding with Rina");
                loadTasks();

              }, [])
          
              const loadTasks=async()=>{
          
                    const results =await axios.get("http://localhost:8080/login/task/alltasks")

                      console.log(results.data);
                      setTasks(results.data)
          
              };

          
              //Delete Function
          
              const deleteTask =async(id)=>{
          
                await axios.delete(`http://localhost:8080/login/task/${id}`)
                
                  setTasks(deleteTask.data)


                  loadTasks()
          
          };

    
            
        
return (

      
      
<div className='container mt-5'>
<div className='row'>
<div className='col-md-12'>
<div className='card'>
<div className='card-header'>

  <h2>Task List 
  <Link to="/addtask" className='btn btn-success float-end'>Add Task</Link>
</h2>

</div>
<div className='card-body'>
  <table className='table table-striped'>

    <thead>
      </thead>

    <tbody>

              {tasks.map((tasks, id) =>(
                <tr key={id}>  

        <td >{tasks.description}</td>

        <td> <Link className="btn btn-secondary mx-2 float-end" to='/action'>Action</Link> </td>
       <td> <Link className="btn btn-outline-primary mx-2 float-end" to={`/task/${tasks.id}`}>Edit</Link> </td>
      {/* <td> <button className="btn btn-danger mx-2" onClick={()=> deleteTask(tasks.id)}>Delete</button></td> */}
       <td> <Link to='/alert' className="btn btn-danger mx-2 float-end"  onClick={()=> deleteTask(tasks.id)}>Delete</Link> </td>

        
     </tr>

     
      ))}
    </tbody>

  </table>

</div>

</div>

</div>

</div>
    </div>  
 )

}


export default TaskList