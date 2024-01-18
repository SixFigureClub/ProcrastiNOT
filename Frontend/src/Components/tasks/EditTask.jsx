

// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';



// export default function EditTask() {

//       let {id} = useParams();
//    let navigate = useNavigate()

//         const [task, setTask] = useState({})

//         // const tasks = task;

//         useEffect(()=>{
//           // console.log("Coding with Rina");
//           loadTasks();

//         }, [])
    
//         const loadTasks=async()=>{
    
//               const results =await axios.get("http://localhost:8080/login/task/${id}")
                        
//                 console.log(results.data);
//                 setTask(results.data)
    
//         };
        
        
//         const onInputChange=(e)=>{
//           e.persist();
//           // setTask(e.target.value);
//           setTask({...task, [e.target.name]:e.target.value});



//           };
           

//         const handleUpdateSubmit = async(e) => {
//             e.preventDefault();

//            console.log(task);
//             setTask(data);

//       const data = {name:task.description}


//  await axios.put(`http://localhost:8080/login/task/${id}`,data)
//    .then(res => {

//     console.log(res);

//   alert(res.data.message);


//  });
//  navigate("/list")

        
//         }





import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


  export default function EditTask () {

   let navigate = useNavigate()

   const {id} = useParams();

        const [task, setTask] = useState("")
       

        const onInputChange=(e)=>{
          setTask({...task, [e.target.name]:e.target.value});
          };
          
useEffect (() => {loadTasks()}, [])
        

        const handleSubmit = async(e) => {
            e.preventDefault();


 await axios.put(`http://localhost:8080/login/task/${id}`,task) 

 navigate("/list")        
      
        };

        const loadTasks=async()=>{

            const results =await axios.get(`http://localhost:8080/login/task/${id}`)
              setTask(results.data)
  
      };

  return (
          

      <div className='container mt-5'>
      <div className='row'>
      <div className='col-md-12'>
      <div className='card'>
      <div className='card-header'>
        <h2>Edit Task  
        <Link to="/list" className='btn btn-warning brn-lg float-end'>Back</Link>
      </h2>

      </div>
      <div className='card-body'>

                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
      <input className='form-control' type="text" name="description"  value={task.description}  onChange={(e) => onInputChange(e)} />

      <button className="btn btn-outline-primary"  type="submit">Update Task</button>

      </div>

      </form>

      </div>

      </div>

      </div>

      </div>

      </div>
        )
}



