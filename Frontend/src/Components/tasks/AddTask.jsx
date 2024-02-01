

import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function AddTask() {

   let navigate = useNavigate()

      const [task, setTask] = useState({
          description: ""

        })

        const data = {
          id: task.id,
          name: task.description
        };
          
        const onInputChange=(e)=>{
          e.persist();
          setTask({...task, [e.target.name]:e.target.value});

          };
           

        const handleSubmit = async(e) => {
            e.preventDefault();

           console.log(task);
           
           if(task.description.length<=5 || task.description.length===0){

            toast.error("Must be more than 5 characters");
          
          }
          else{
            toast.success("New Task is Created")

          }


 await axios.post("http://localhost:8080/login/task/add", task).then(res => {

  console.log(res);
   setTask(task);

 });


 navigate("/list")
        
        
        };


  return (

    <>

<div className='container mt-5'>
<a className="navbar-brand float-end" href="/login">LogoutButton</a>
<div className='row'>
<div className='col-md-12'>
<div className='card'>
<div className='card-header'>
  <h2> Add Task  
  <Link to="/list" className='btn btn-warning brn-lg float-end'>Back</Link>
</h2>

</div>
<div className='card-body'>

          <form  onSubmit={handleSubmit}>
          <div className="form-group">
 <input className='form-control form-control-lg' type="text" name="description"  value={task.description} placeholder="try typing"
  onChange={(e) => onInputChange(e)} />

 <button className="btn btn-outline-primary mt-3"  type="submit">Save Task</button>
</div>

 </form>

</div>

</div>

</div>

</div>

</div>

</>
  )
}
