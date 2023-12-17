import React from 'react'
import { Link } from 'react-router-dom'
export default function AddTask() {
  return (
    <div className="container bs-success-border-subtle"> 
      <form className="alert alert-danger" role="alert">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Add Task</label>
  <input type="email" className="form-control" placeholder="Try Typing" />
  <Link className="btn btn-outline-success" type="submit" to="/addTask">Add Task</Link>

  {/* <div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div> */}
</div>
   </form> 
   <div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
  </div>
</div>  
        </div>
  )
}


// <form method="post"  class="d-flex d-grid">
//             <div class="form-group">
//                 <!--        <label th:for="description">Task Description</label>-->
//                 <button th:for="description" class="btn btn-success btn-md" type="submit">Add Task</button>
//                 <input class="form-control" th:field="${task.description}" type="text" placeholder="Try Typing" />
//                 <span th:errors="${task.description}" class="error"></span>
//             </div>
// <!--            <input type="submit" value="Add Task" /> doesn't effect-->
//         </form>