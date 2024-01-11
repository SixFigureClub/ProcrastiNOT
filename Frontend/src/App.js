


import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import Welcome from './Components/welcomePage/Welcome';
import NavBar from './Components/welcomePage/Navbar';
import AddTask from './Components/tasks/AddTask';

function App() {
  
  return (


    <Router>

<NavBar />


      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* Don't use HomePage component */}
        <Route path="/" element={<Welcome />} />
        <Route path="/addtask" element={<AddTask />} />
        {/* <Route path="/search" element={<Search />} /> */}


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
// import Welcome from './Components/welcomePage/Welcome';
// import LogoutButton from './Components/HomePage/LogoutButton';
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       {/* <Switch> */}
//         <Route path='/' exact component={Welcome} />
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