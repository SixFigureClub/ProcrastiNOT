import { Component } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return(<nav className="bg-blue-200 p-4 mt-4">
                       <ul className="flex space-x-4 w-full">

                           <li className="flex-grow flex-1">
                              <Link to="http://localhost:8080/search" className="text-white">Search</Link>
                           </li>



                       </ul>
                   </nav>
           );
           };

           export default NavigationBar;