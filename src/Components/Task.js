import React from "react";
import "../styles/Task.css";
import { Draggable } from "react-beautiful-dnd";
import useToggle from "../useToggleState";
import EditForm from "./EditForm";

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
                                <span className="Task-assigned-img">
                                    {props.task.user}
                                </span>
                            </div>
                            <div className="Task-content">
                                {props.task.text}
                            </div>
                            <div className="Task-options">
                                <button
                                    className="Task-btn-edit"
                                    style={{
                                        backgroundColor: '#E3E4E6',
                                    }}
                                    onClick={toggle}
                                >
                                    Edit
                                </button>
                                <button
                                    className="Task-btn-delete"
                                    style={{
                                        backgroundColor: '#E3E4E6',
                                    }}
                                    onClick={() =>
                                        props.removeTask(props.task.id)
                                    }
                                >
                                    Delete
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
