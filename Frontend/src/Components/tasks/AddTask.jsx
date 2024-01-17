

import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function AddTask() {



   let navigate = useNavigate()

        const [task, setTask] = useState({
          id: 0,
          description: ""

        })

        const tasks = task;
        
        const onInputChange=(e)=>{
          // setTask(e.target.value);
          setTask({...task, [e.target.id]:e.target.value});



          };
           

        const handleSubmit = async(e) => {
            e.preventDefault();

          //  console.log(task);
        setTask(task);



           try{
            await axios.post("http://localhost:8080/login/task/add",task,{
            // )
            //  {

     headers:{ "content-type": "application/json"},
             withCredentials:true,
    

             });
    

             }
             catch(e){

     console.log(e);
 }

 navigate("/list")


        //  AddTodo(task);
          // setTask("")
        
        
        };


  return (
    
        
      <div className='container'>
      <h1>New Task!</h1>
       {/* <div className='row'> */}

        {/* <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'> */}
    

           <form onSubmit={handleSubmit}>
<input className='form-control' type="text" name="task"  placeholder="try typing" onChange={(e) => onInputChange(e)} />

<button className="btn btn-outline-primary"  type="submit">Add Task</button>
{/* <Link className="btn btn-outline-primary" to='/' type="submit">Add Task</Link> */}


<Link className="btn btn-outline-danger mx-3" to="/">Cancel</Link>


</form>
</div>
// </div>
    // </div>
  )
}
