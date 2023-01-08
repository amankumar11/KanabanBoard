import React from "react";
import Task from "./Task";
import "../styles/Column.css";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {
    return (
        <div
            className="Column"
            style={{backgroundColor: '#E3E4E6'}}
        >
            <div className="Column-main">
                <h2 className="Column-name">{props.columnData.name}</h2>
                <p className="Column-numbers">
                    {props.columnData.taskIds.length} / {props.columnData.limit}
                    ;
                </p>
                <Droppable droppableId={`${props.columnData.id - 1}`}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            className="Columns-tasks-container"
                            {...provided.droppableProps}
                        >
                            {props.columnData.taskIds.map((task, index) => {
                                return (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        task={task}
                                        color={props.columnData.color}
                                        index={index}
                                        removeTask={props.removeTask}
                                        editTask={props.editTask}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <div className="Column-footer">
                <button
                    className="Column-btn-add"
                    onClick={() => props.openModal(props.columnData)}
                    disabled={
                        props.columnData.taskIds.length >= 5 ? true : false
                    }
                >
                    Add task
                </button>
            </div>
        </div>
    );
};

export default Column;
