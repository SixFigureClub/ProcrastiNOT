

import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function AddTask() {


    
// const [first, setfirst] = useState(" ")



   let navigate = useNavigate()

        const [task, setTask] = useState("")
        
        const onInputChange=(e)=>{
          setTask({...task, [e.target.description]:e.target.value});


          };
           

        const handleSubmit = async(e) => {
            e.preventDefault();

          //  console.log(task);

          try{
            await axios.post("http://localhost:8080/task",task) 

          }
catch(e){

    console.log(e);
}

 navigate("/")


        //  AddTodo(task);
          setTask("")
        
        
        };


  return (
    <div>
        
<h1>Log your Task</h1>


           {/* <input type="text" name="description" placeholder="try typing" onChange={(e) => onInputChange(e)} /> */}
           <form onSubmit={handleSubmit}>
<input type="text" name="description" placeholder="try typing" onChange={(e) => onInputChange(e)} />

<button className="btn btn-primary" type="submit">Add Task</button>

</form>



    </div>
  )
}
