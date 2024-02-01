

import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/tasks/Navbar';
import AddTask from './Components/tasks/AddTask';
import EditTask from './Components/tasks/EditTask';
import DropColumn from './Components/tasks/DropColumn'
import TaskLists from './Components/tasks/TaskLists';



function App() {  

  return (

    <Router>
      <NavBar /> 
       <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/register" element={<RegisterForm />} />

         {/* Don't use HomePage component */}
        <Route  path="/list" element={<TaskLists />} />
        <Route path="/addtask" element={<AddTask />} />
         <Route path='/task/:id' element={<EditTask />} />
         <Route path="/action" element={<DropColumn />} />
       </Routes>
     </Router>

  );
}

export default App;

