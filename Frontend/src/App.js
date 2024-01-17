


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



function App() {
  
  return (


    <Router>

<NavBar />


      <Routes>

        {/* <Route path="/" element={<HomePage />} /> */}


        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/welcome" element={<NavBar />} /> */}
        <Route  path="/list" element={<TaskList />} />


        {/* Don't use HomePage component */}
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/search" element={<Search />} />
        <Route path='/edit/{id}' element={<EditTask />} />
        {/* <Route path="/newday" element={<ToWrapper />} /> */}


      </Routes>
    </Router>
  );
}

export default App;


// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./Components/welcomePage/Navbar"
// import LoginForm from './Components/LoginForm/LoginForm';
// import RegisterForm from './Components/RegisterForm/RegisterForm';
// import HomePage from './Components/HomePage/HomePage';
// import WelcomePage from './Components/welcomePage/WelcomePage';
// import LogoutButton from './Components/HomePage/LogoutButton';
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       {/* <Switch> */}
//         <Route path='/'  component={WelcomePage} />
//         <Route path='/login' component={LoginForm} />
//         <Route path='/register' component={RegisterForm} />
//         <Route path='/' component={LogoutButton} />
//        <Route path="/" element={<HomePage />} />


//         {/* <Route path='/addtask' component={AddTask} /> */}
//       {/* </Switch> */}
//     </Router>
//   );
// }

// export default App;