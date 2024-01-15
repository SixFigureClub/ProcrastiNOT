import React, { useEffect } from 'react';
import './HomePage.css';
import LogoutButton from './LogoutButton';
import MainTaskLists from '../MainTaskLists/MainTaskLists';
import Modal from '../Modal';

// Initial data for the three initial task lists that are always rendered
const initialColumns = [  
  {
    name: "New Tasks",
    description: "New tasks that haven't been started yet",
    children: []
  },
  {
    name: "In Progress",
    description: "Tasks that are currently being worked on",
    children: []
  },
  {
    name: "Completed",
    description: "All of these tasks have been completed",
    children: []
  },
]

// Functional component for the home page
const HomePage = () => {
  const [cols, setCols] = React.useState(initialColumns)

    // useEffect hook to set the document title when the component mounts
    useEffect(() => {
        document.title = 'ProcrastiNOT';
    }, []);

    // Dummy function for handling logout (will be expanded as needed)
    const handleLogout = () => {
        // Add additional logic for handling logout when necessary
    };

    // Function to add a new column
    const addColumn = (event, callback) => {
      event.preventDefault()

       // Check if the maximum number of columns (8) is reached
    if (cols.length >= 8) {
      // Displays a message to the user that the maximum amount of columns has been reached
      return alert("Maximum number of columns reached. You cannot add more.");
    }

    // Extract data from the form and update the state
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const description = formData.get("description");
    setCols(prev => [...prev, { name, description, children: [] }]);
    event.target.reset()
    if (typeof callback === "function") {
      callback()
      }
    };

    // Render the three columns within a container
    return (
      <div className="home-page-container">
        <h1>ProcrastiNOT</h1>
        <div className="column-container">
                <MainTaskLists data={cols} />
                <AddNewColumn addColumn={addColumn}/>
                <LogoutButton onLogout={handleLogout} />
        </div>
      </div>
    );
};

export default HomePage;

// Component for adding a new column with a modal
// Define the AddNewColumn component
const AddNewColumn = ({addColumn}) => {
  // State hook to manage the visibility of the modal
  const [open, setOpen] = React.useState(false)

  // Toggle function to switch the value of 'open'
  const toggle = () => {
    setOpen(prev => !prev)
  }

  // JSX to render the component
  return (
    <>
      {/* Button to trigger the modal visibility toggle */}
      <button className="modal-btn" onClick={toggle} type="button">+</button>

      {/* Modal component with a form for creating a new task list */}
      <Modal toggle={toggle} open={open}>
        <form onSubmit={event => addColumn(event,toggle)}>
          
          {/* Input for task list name */}
          <label>
            <span>Create A New Task List</span>
            <input className="modal-input" autoFocus name='name' placeholder='List Name'/>
          </label>

          {/* Input for task list description */}
          <label>
          <input className="modal-input" name='description' placeholder='Description'/>
        </label>

        {/* Submit button for creating the new task list */}
        <button className="modal-submit" type="submit">Create</button>
      </form>
    </Modal>
    </>
  )
}