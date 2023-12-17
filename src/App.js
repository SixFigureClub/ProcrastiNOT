
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar.js';
import Home from './component/Home.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddTask from './tasks/AddTask.js';
import Register from './component/Register.js';
import LoginForm from './component/LoginForm.js';

function App() {
  return (
  
    <div className="App">
      {/* <Hello /> */}
    <Router> 
        <Navbar />

        <Routes>  
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<LoginForm />}/>

          <Route exact path="/component/register" element={<Register />}/>
          <Route exact path="/addTask" element={<AddTask />}/>


          


          {/* <Route        />
          <Route        />
          <Route        /> */} 

        </Routes>
    </Router>
    

    </div>
  );
}

export default App;
