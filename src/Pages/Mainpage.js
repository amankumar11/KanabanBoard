import React, { useState } from "react";
import { columnsRawData } from "../Data/Data";
import Column from "../Components/Column";
import "../styles/main.css";
import Modal from "../Components/Modal";
import { DragDropContext } from "react-beautiful-dnd";
import Navbar from "../Components/Navbar";
import Error from "../Components/Error";

const Mainpage = () => {
  const [columns, setColumns] = useState(columnsRawData);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      setError("This is not a valid destination");
      setTimeout(clearError, 3000);
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      setError("Index and destination are same");
      setTimeout(clearError, 3000);
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      const swapTask = newTaskIds[source.index];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, swapTask);

      const newColumnsState = columns.map((c) => {
        if (c.id === start.id) {
          c.taskIds = newTaskIds;
          return c;
        } else return c;
      });

      const newColumnsState2 = [...newColumnsState];
      setColumns(newColumnsState2);
    } else {
      const startTaskIds = Array.from(start.taskIds);
      const [item] = startTaskIds.splice(source.index, 1);

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, item);

      const newColumnsState = columns.map((c) => {
        if (c.id === start.id) {
          c.taskIds = startTaskIds;
          return c;
        } else if (c.id === finish.id) {
          c.taskIds = finishTaskIds;
          return c;
        } else return c;
      });
      const newColumnsState2 = [...newColumnsState];
      setColumns(newColumnsState2);
    }
  };

  const openModal = (data) => {
    const columnId = data.id;
    setModal(columnId);
  };

  const closeModal = () => {
    setModal(false);
  };

  const addTask = (newTask) => {
    setModal(false);
    const updatedColumns = columns.map((column) => {
      if (column.id === newTask.idColumn) {
        column.taskIds.push(newTask);
        return column;
      } else return column;
    });
    setColumns(updatedColumns);
  };

  const removeTask = (taskId) => {
    const updatedColumns = columns
      .map((column) => {
        return Object.assign({}, column, {
          taskIds: column.taskIds.filter((task) => task.id !== taskId),
        });
      })
      .filter((column) => column.taskIds.length >= 0);
    setColumns(updatedColumns);
  };

  const editTask = (taskId, newUser, newText) => {
    const updatedColumns = columns.map((column) => {
      return Object.assign({}, column, {
        taskIds: column.taskIds.map((task) => {
          if (task.id === taskId) {
            task.user = newUser;
            task.text = newText;
            return task;
          }
          return task;
        }),
      });
    });
    setColumns(updatedColumns);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="main">
          {modal && (
            <Modal
              closeModal={closeModal}
              addTask={addTask}
              columnData={modal}
            />
          )}
          <Navbar />

          <div className="main-columns-container">
            {columns.map((c) => {
              return (
                <Column
                  columnData={c}
                  key={c.name}
                  openModal={openModal}
                  removeTask={removeTask}
                  editTask={editTask}
                />
              );
            })}
            <div className="add-sec-btn">+</div>
          </div>
        </div>
      </DragDropContext>
      {error && <Error error={error} />}
    </>
  );
};

export default Mainpage;
