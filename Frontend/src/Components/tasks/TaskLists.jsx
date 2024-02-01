import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Carousel } from "bootstrap";
import Swal from "sweetalert2";


const TaskLists = (props) => {
  
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async() => {
    axios.get("http://localhost:8080/login/task/alltasks")
      .then(response => {
        // console.log(response.data)
          let tasks = response.data;
        setTasks(
          tasks.map((task) => {
            return {
               select: false,
               id: task.id,
              description: task.description,            
            };
          })
        );
        // setTasks(response.data)
      })
      .catch(err => alert(err));
  };
    
  const deleteByIds = () => { //alert("All Tasks will be deleted")



  
    let arrayIds  = [];
     tasks.forEach(task => {
       if (task.select) {
        arrayIds.push(task.id);
         console.log(task);
       }
    });
    console.log( arrayIds)

    Swal.fire({
      title: "Are you sure?",
      text: "Task will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       axios.delete(`http://localhost:8080/login/task/${arrayIds}`).then((response) => {
        console.log(response);
           getTask();
       });
      }
    })
      
    
    };
    
  return (
<>  
    <div className='container mt-25'>
    <a className="navbar-brand float-end" href="/login">LogoutButton</a>
    <div className='row mt-20'>
    <div className='col-md-12'>
    <div className='card'>
    <div className='card-header'>
        
<h2>Task List </h2>
      {/* <Link to="/addtask" className='badge rounded-pill text-bg-success float-center mt-2'>Add Task</Link> */}
      <Link to="/addtask" className="btn btn-success btn-sm">Add Task</Link>
       <button to="/alert" className="btn btn-danger btn-sm m-2"  onClick={() => {deleteByIds()}}>
        Delete Task
      </button> 
      <Link className="btn btn-secondary btn-sm mx-2" to='/action'>Action</Link> 
      <form className="d-flex justify-center float-end" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className='card-body'>
              <input
                type="checkbox"
                onChange={e => { let checked = e.target.checked;
                  setTasks(
                    tasks.map(d => {
                      d.select = checked;
                      return d;
                    })
                  );
                }}
              ></input> 
                <label className="form-check-label m-3">Select All Task</label>    
      <ul className="list-group">
          {tasks.map((d, id) => (
          <li className="list-group-item" key={d.id}>          
                <input className="m-3" type="checkbox" checked={d.select} onChange={event => {
                    let checked = event.target.checked;
                     setTasks(
                      tasks.map(data => {
                        if (d.id === data.id) {
                          // data.select = true;
                         data.select = checked;
                        }
                        return data;
                      })
                    );
                  }} />                      
              <label>{d.description}</label>
              <Link className="btn btn-outline-primary mx-2 float-end" to={`/task/${d.id}`}>Edit</Link> 
              </li>
          ))}
          </ul>          
          </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    {/* <DropColumn  tasks={tasks} setTasks={setTasks} /> */}
    </>
  );
}
export default TaskLists;