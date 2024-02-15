import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

// Custom hook for managing portals
const usePortal = el => {
  const [portal, setPortal] = React.useState({
    render: () => null,
    remove: () => null,
  });

  // Function to create a portal
  const createPortal = React.useCallback(el => {
    const Portal = ({ children }) => ReactDOM.createPortal(children, el);
    const remove = () => ReactDOM.unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  React.useEffect(() => {
    // Remove existing portal if it exists
    if (el) portal.remove();
    // Create a new portal
    const newPortal = createPortal(el);
    setPortal(newPortal);
    // Remove the portal when the component is unmounted
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};

// Modal component
const Modal = ({children, open=false, toggle}) => {
    const Portal = usePortal(document.getElementById("modal"))
    // If the modal is not open, don't render anything
    if (!open) return null
    // Render the modal using the portal
    return (
        <Portal>
            <div onClick={toggle} className="modal-dimmer"/>
            <div className="modal">
            {children}
            </div>
        </Portal>
    )
}

export default Modal;