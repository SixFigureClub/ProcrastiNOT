// // import React from 'react'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';


// // export default function Search() {







// //   return (
// //     <div>
        
// // <h1>Search Results</h1>

// // <li> </li>


// //     </div>
// //   )
// // }



// const Search = ({ onSearch }) => {
//     const [description, setDescription] = useState([]);
//     const handleSearch = () => {
//       onSearch(description);
//     };
//     useEffect(()=>{
//       // console.log("Coding with Rina");
//       loadSearch();
//     }, [])
//     const loadSearch=async()=>{
//       const results =await axios.get("http://localhost:8080/task/search")
//       //  console.log(results.data);
//         setDescription(results.data)





//   };
//     return (
//       <div>




//         {/* <input
//           type="text"
//           placeholder="Search..."
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button> */}
//       </div>
//     );
//   };
//   export default Search;