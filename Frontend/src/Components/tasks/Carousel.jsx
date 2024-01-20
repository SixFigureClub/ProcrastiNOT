import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Swal from 'sweetalert2'
import TaskList from './TaskList'
import { Link } from 'react-router-dom';


function Arrow(props){

const {className, style, onClick} = props;

return(
 



<div    className={className}
    
       style={{...style,  display: "block", background: "black"}}
         onClick={onClick}  >

</div>

);
}


 function Carousel(message) {

 var settings = {...Arrow, TaskList };

const handleClick =() => {
    Swal.fire({
        title: "Are you sure?",
        text: "Your task will be deleted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}

  return (

    <div className='container mt-16'>

<h2>You Are Deleting Task</h2>
<Slider {...settings} >
</Slider>
<br />

<Link to ='/list' className='btn btn-danger' onClick={handleClick}>Delete!</Link>
    </div>
  )
}

export default Carousel;