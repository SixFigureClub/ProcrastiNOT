

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';




        const Welcome = () => {


  
          const [tasks, setTasks] = useState([{
            name: " "
          }]);
          //  const tasks: {};
          
          const {id} = useParams()
          
              useEffect(()=>{
                // console.log("Coding with Rina");
                loadTasks();

              }, [])
          
              const loadTasks=async()=>{
          
                    const results =await axios.get("http://localhost:8080/task/alltasks")
                    //  console.log(results.data);
                      setTasks(results.data)
          
              };
          
              //Delete Function
          
              const deleteTask =async(id)=>{
          
                await axios.delete(`http://localhost:8080/task/${id}`)
                //  console.log(results.data);
                  // setTasks(results.data)
                  loadTasks()
          
          };
             
                  
          return (
            <>

            <h1>ProcrastiNOT Page</h1>

            <h2>To Do List</h2>

            
              {
                tasks.map((e) => {


                  return <div key={id}>
                    
                     <li >{e.description}</li>
                     
                     </div>

                  
                })}


            </>
          );

}


export default Welcome

