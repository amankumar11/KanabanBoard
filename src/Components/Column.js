import Task from "./Task";
import "../styles/Column.css";
import { Droppable } from "react-beautiful-dnd";

const Column = (props) => {
  return (
    <div className="Column">
      <div className="Column-main">
        <div className="Column-name-div">
          <h2 className="Column-name">
            {props.columnData.name}({props.columnData.taskIds.length})
          </h2>
        </div>
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
        <div
          className="Column-btn-add"
          onClick={() => props.openModal(props.columnData)}
        >
          + Add a Task
        </div>
      </div>
    </div>
  );
};

export default Column;
