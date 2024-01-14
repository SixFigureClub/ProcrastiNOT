import React, { useEffect } from 'react';
import './HomePage.css';
import LogoutButton from './LogoutButton';
import MainTaskLists from '../MainTaskLists/MainTaskLists';
import Modal from '../Modal';

const initialColumns = [  
  {
    name: "New Tasks",
    children: []
  },
  {
    name: "In Progress",
    children: []
  },
  {
    name: "Completed",
    children: []
  },
]

const HomePage = () => {
  const [cols, setCols] = React.useState(initialColumns)

    // useEffect hook to set the document title when the component mounts
    useEffect(() => {
        document.title = 'ProcrastiNOT';
    }, []);

    // Dummy function for handling logout (can be expanded as needed)
    const handleLogout = () => {
        // Add any additional logic for handling logout if necessary
    };

    const addColumn = (event, callback) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const name = formData.get("name")
      setCols(prev => [...prev,{name, children:[]}])
      event.target.reset()
      if (typeof callback === "function") {
        callback()
      }
    }

    // Render the three columns within a container
    return (
        <div className="three-columns-container">
                <MainTaskLists data={cols} />
                <AddNewColumn addColumn={addColumn}/>
                <LogoutButton onLogout={handleLogout} />
        </div>
    );
};

export default HomePage;
 
const AddNewColumn = ({addColumn}) => {
  const [open, setOpen] = React.useState(false)
  const toggle = () => {
    setOpen(prev => !prev)
  }
  return (
    <>
    <button className="modal-btn" onClick={toggle} type="button">+</button>
    <Modal toggle={toggle} open={open}>
      <form onSubmit={event => addColumn(event,toggle)}>
        <label>
          <span>Create New Task List </span>
          <input name='name' placeholder='Task List Name'/>
        </label>
        <button type="submit">Create</button>
      </form>
    </Modal>
    </>
  )
}