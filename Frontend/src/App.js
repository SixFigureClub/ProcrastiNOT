


import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/tasks/Navbar';
import AddTask from './Components/tasks/AddTask';
import Search from './Components/Search'
import TaskList from './Components/tasks/TaskList';
import EditTask from './Components/tasks/EditTask';
import DropColumn from './Components/tasks/DropColumn'



function App() {
  
  return (


    <Router>

<NavBar />


      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route  path="/list" element={<TaskList />} />


        {/* Don't use HomePage component */}
        <Route path="/addtask" element={<AddTask />} />
        <Route path='/task/:id' element={<EditTask />} />
        <Route path="/action" element={<DropColumn />} />
        <Route path="/search" element={<Search />} />



      </Routes>
    </Router>
  );
}

export default App;

