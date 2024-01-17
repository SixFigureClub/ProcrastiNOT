import React from 'react';
import { Link } from 'react-router-dom';
          
export default function Navbar() {
    return (
  
            <div className='container'>
  
         <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top justify-center">
      <div className="container-fluid">
      <a className="navbar-brand" href="/login">ProcrastiNOT</a>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
          </li> */}
         
  <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <Link className="btn btn-outline-success" type="submit" to='/search'>Search</Link>
        </form>
  
          <li className="nav-item">
            <a className="logout-button" aria-current="page" href="/login">LogoutButton</a>
          </li>
         
        </ul>
        
      </div>
  
            {/* <Link className="btn btn-outline-success" type="button" to={"/addTask"}>Add Task</Link> */}
  
    </div>
  </nav>
  
  </div>
  
    )
  }
  
        
         