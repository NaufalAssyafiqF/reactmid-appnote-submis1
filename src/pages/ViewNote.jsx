import React from "react";
import { useParams } from "react-router-dom";

const ViewNote = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>view note</h1>
      <p>{id}</p>
    </div>
  );
};

export default ViewNote;
