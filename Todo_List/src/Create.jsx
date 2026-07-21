import React, { useState, useEffect } from "react";
import axios from "axios";
//importing the floatinglabel and form control
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//importing button component
import Button from "react-bootstrap/Button";

export default function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    console.log("Sending task: ", task);
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex  justify-content-center gap-2 m-4">
      {/* creating a floating label for input the task */}
      <FloatingLabel
        controlId="floatingInput"
        label="Enter a new todo..."
        className="flex-grow-1"
      >
        {/* creating the input field */}
        <Form.Control
          type="text"
          value={task}
          placeholder="Enter a new todo..."
          onChange={(e) => setTask(e.target.value)}
        />
      </FloatingLabel>

      {/* creating a button that is transprant */}
      <Button variant="outline-info" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
