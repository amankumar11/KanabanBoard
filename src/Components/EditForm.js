import React from "react";
import useInputState from "../hooks/useInputState";
import "../styles/EditForm.css";

const EditForm = (props) => {
  const [text, handleChangeText] = useInputState(props.startText);
  const [user, handleChangeUser] = useInputState(props.startUser);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editTask(props.taskId, user, text);
        props.toggle();
      }}
      className="EditForm"
    >
      <div className="EditForm-input-container">
        <label htmlFor="task">Task: </label>
        <textarea
          className="EditForm-input"
          type="text"
          cols="15"
          rows="5"
          value={text}
          onChange={handleChangeText}
          name="task"
          id="task"
          required
        ></textarea>
      </div>
      <div className="EditForm-input-container">
        <label htmlFor="user">For: </label>
        <input
          className="EditForm-input for-input"
          type="text"
          name="user"
          id="user"
          value={user}
          onChange={handleChangeUser}
          required
        ></input>
      </div>
      <button
        className="EditForm-btn"
        style={{ backgroundColor: `${props.color}` }}
      >
        Save
      </button>
    </form>
  );
};

export default EditForm;
