import styles from "./App.module.css";
import { Header } from "./Header";
import { Newtask } from "./Newtask";
import { Tasklist } from "./Tasklist";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TaskObjects {
  id: string;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTaskList] = useState<TaskObjects[]>([]);

  const handleNewTask = (newTask: string) => {
    const newTaskObject: TaskObjects = {
      id: uuidv4(),
      text: newTask,
      isCompleted: false,
    };
    setTaskList([...tasks, newTaskObject]);
  };

  function handleDeleteTask(idToRemove: string) {
    const taskWithoutDeletedOne = tasks.filter((item) => {
      return item.id !== idToRemove;
    });
    setTaskList(taskWithoutDeletedOne);
  }

  function handleChangeCompleteStatus(idToChange: string) {
    const updatedTasks = tasks.map((item) => {
      if (item.id == idToChange) {
        return { ...item, isCompleted: item.isCompleted ? false : true };
      }
      return item;
    });

    setTaskList(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className={styles.container}>
          <Newtask onNewTask={handleNewTask} />
          <Tasklist
            taskList={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeCompleteStatus={handleChangeCompleteStatus}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
