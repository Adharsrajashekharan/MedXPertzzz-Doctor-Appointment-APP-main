import React from "react";
import  "../styles/componentStyles/./loading.css";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div>
      <Spinner animation="border" variant="primary" className="spinz" />
    </div>
  );
}

export default Loading;


