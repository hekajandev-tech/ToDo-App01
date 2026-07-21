import React from "react";
import Create from "./Create";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
//importing the bootstrap component card
import Card from "react-bootstrap/Card";
//importing the css file

function Home() {
  const [todos, setTodos] = useState([]);

  //getting all the tasks
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  //function for the tic mark
  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  //function for handle the delete
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card className="mb-3" style={{ width: "40rem", height: "20rem" }}>
        <Card.Body className="d-flex flex-column gap-5">
          <Card.Title className="text-center mb-4"> Todo List </Card.Title>
          <Create />
        </Card.Body>
      </Card>

      <Card style={{ width: "40rem", height: "20rem" }}>
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          {/* mapping the content in todo */}
          {todos.length === 0 ? (
            <div>
              <Card.Title>No Records yet</Card.Title>
            </div>
          ) : (
            todos.map((todo) => (
              <div>
                <Card.Title className="text-center mb-4">Your Tasks</Card.Title>
                <div key={todo._id} className="task">
                  <div
                    className="checkbox d-flex justify-content-center"
                    onClick={() => handleEdit(todo._id)}
                    style={{ cursor: "pointer",gap:"10px"}}
                  >
                    {todo.done ? (
                      <BsFillCheckCircleFill className="icon" />
                    ) : (
                      <BsCircleFill className="icon" />
                    )}
                    <p className={`mb-0 ${todo.done ? "line_throughs" : ""}`}>
                      {todo.task}
                    </p>
                  </div>

                  <div>
                    <span>
                      <BsFillTrashFill
                        className="icon"
                        onClick={() => handleDelete(todo._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
