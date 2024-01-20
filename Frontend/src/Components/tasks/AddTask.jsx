

import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddTask() {

   let navigate = useNavigate()

        const [task, setTask] = useState({
          description: ""

        })

        const data = {
          name: task.description
        };
        
        const onInputChange=(e)=>{
          e.persist();
          setTask({...task, [e.target.name]:e.target.value});

          };
           

        const handleSubmit = async(e) => {
            e.preventDefault();

           console.log(task);
            setTask(task);

      const data = {name:task.description};

 await axios.post("http://localhost:8080/login/task/add",task).then(res => {

  console.log(res);
  
  alert(res.data.message);


 });


 navigate("/list")
        
        
        };


  return (
    

<div className='container mt-5'>
<div className='row'>
<div className='col-md-12'>
<div className='card'>
<div className='card-header'>
  <h2> Add Task  
  <Link to="/list" className='btn btn-warning brn-lg float-end'>Back</Link>
</h2>

</div>
<div className='card-body'>

          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
 <input className='form-control' type="text" name="description"  value={task.description} placeholder="try typing" onChange={(e) => onInputChange(e)} />

 <button className="btn btn-outline-primary"  type="submit">Save Task</button>

</div>

 </form>

</div>

</div>

</div>

</div>

</div>
  )
}
