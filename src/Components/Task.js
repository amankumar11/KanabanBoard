import React from "react";
import "../styles/Task.css";
import { Draggable } from "react-beautiful-dnd";
import useToggle from "../hooks/useToggleState";
import EditForm from "./EditForm";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";

const Task = (props) => {
  const [isEditing, toggle] = useToggle(false);

  return (
    <Draggable draggableId={`${props.task.id}`} index={props.index}>
      {(provided) => (
        <div
          className="Task"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {isEditing ? (
            <EditForm
              color={props.color}
              editTask={props.editTask}
              taskId={props.task.id}
              toggle={toggle}
              startUser={props.task.user}
              startText={props.task.text}
            />
          ) : (
            <>
              <div className="Task-assigned">
                <span className="Task-assigned-img">{props.task.user}</span>
              </div>
              <div className="Task-content">{props.task.text}</div>
              <div className="Task-options">
                <button className="Task-btn-edit" onClick={toggle}>
                  <img alt="edit" src={Edit} width={20}></img>
                </button>
                <button
                  className="Task-btn-delete"
                  onClick={() => props.removeTask(props.task.id)}
                >
                  <img alt="Delete" src={Delete} width={20}></img>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
