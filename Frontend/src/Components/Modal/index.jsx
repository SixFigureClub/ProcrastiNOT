import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"

const usePortal = el => {
  const [portal, setPortal] = React.useState({
    render: () => null,
    remove: () => null,
  });

  const createPortal = React.useCallback(el => {
    const Portal = ({ children }) => ReactDOM.createPortal(children, el);
    const remove = () => ReactDOM.unmountComponentAtNode(el);
    return { render: Portal, remove };
  }, []);

  React.useEffect(() => {
    if (el) portal.remove();
    const newPortal = createPortal(el);
    setPortal(newPortal);
    return () => newPortal.remove(el);
  }, [el]);

  return portal.render;
};

const Modal = ({children, open=false, toggle}) => {
    const Portal = usePortal(document.getElementById("modal"))
    if (!open) return null
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