import React from "react";

export const Modal = ({ shouldShow, onClose, children }) => {
  // const [shouldShow, setShouldShow] = useState(false);

  return shouldShow ? (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>Hide Modal</button>
        {children}
      </div>
    </div>
  ) : null;
};
