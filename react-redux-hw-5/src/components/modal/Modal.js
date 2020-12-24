import React from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

function Modal(props) {

  return createPortal(
    <div className="modal">
    {props.children}
  </div>,
    document.getElementById("modal_root")
  );

}

export default Modal;
