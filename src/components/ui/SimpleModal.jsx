import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../ui/Modal";

const SimpleModal = ({ buttonLabel, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal-wrap">
      <div className="expand" onClick={() => setShowModal(true)}>
        {/* {buttonLabel} */}
      </div>

      {showModal && <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>}
    </div>
  );
};

SimpleModal.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SimpleModal;
