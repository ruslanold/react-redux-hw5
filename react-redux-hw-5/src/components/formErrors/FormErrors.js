import React from "react";

import "./FormErrors.css";


function FormErrors({ props }) {
  console.log(props);

  return (
    <div className="errors">
      {
        <p>{Object.values(props).find( el => el.length > 0)}</p>
      }
    </div>
  );
}

export default FormErrors;
