import React from "react";
import "../styles/Modal.css";
import useInputState from "../hooks/useInputState";
import { v4 as uuidv4 } from "uuid";

const Modal = (props) => {
  const [text, handleChangeText] = useInputState("");
  const [user, handleChangeUser] = useInputState("");

  const idColumn = props.columnData;

  const newTask = {
    id: uuidv4(),
    text: text,
    idColumn: idColumn,
    user: user,
  };

  return (
    <div className="Modal">
      <section className="Modal-content">
        <span className="Modal-close-btn" onClick={props.closeModal}></span>
        <form
          className="Modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.addTask(newTask);
          }}
        >
          <div className="Modal-input-container">
            <label htmlFor="task">Task: </label>
            <textarea
              className="Modal-input"
              type="text"
              cols="20"
              rows="5"
              value={text}
              onChange={handleChangeText}
              name="task"
              id="task"
            ></textarea>
          </div>
          <div className="Modal-input-container">
            <label htmlFor="user">For: </label>
            <input
              className="Modal-input for-input"
              type="text"
              name="user"
              id="user"
              value={user}
              onChange={handleChangeUser}
            ></input>
          </div>
          <button className="Modal-input-submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
