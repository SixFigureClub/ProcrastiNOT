import React from 'react';

export default function Register() {
  return (
    <div className="container">   
        <div className="mb-3">
        <form method="post">
    <div class="form-group">
        
        <label>User Name</label>
  <input type="email" className="form-control" placeholder="Try Typing" />    </div>
    <div class="form-group">
        <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="email" className="form-control" placeholder="Try Typing" />       
        {/* <p class="error" th:errors="${registerFormDTO.email}"></p> */}
    </div>
    <div class="form-group">
      
        <label for="exampleFormControlInput1" class="form-label">Verify Passwod</label>
  <input type="email" className="form-control" placeholder="Try Typing" /> 
        {/* <p class="error" th:errors="${registerFormDTO.password}"></p> */}
    </div>

   <input type="submit" class="btn btn-primary" value="Register" />
   <link to="/"></link>
</form>
</div>
    </div>
  )
}
