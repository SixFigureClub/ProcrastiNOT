
import './App.css';
// import Hello from './components/Hello.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar.js';
import Home from './pages/Home.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddTask from './tasks/AddTask.js';
function App() {
  return (
  
    <div className="App">
      {/* <Hello /> */}
    <Router> 
        <Navbar />

        <Routes>  
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/addTask" element={<AddTask />}/>
          {/* <Route        />
          <Route        />
          <Route        />
          <Route        />
          <Route        /> */}

        </Routes>
    </Router>
    

    </div>
  );
}

export default App;
