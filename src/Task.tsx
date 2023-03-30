import styles from "./Task.module.css";
import { Trash } from "@phosphor-icons/react";
import check from "./assets/check.svg";
import check_hover from "./assets/check-hover.svg";
import checked from "./assets/checked.svg";
import checked_hover from "./assets/checked-hover.svg";

interface TaskInfo {
  id: string;
  text: string;
  isCompleted: boolean;
  onDeleteTask: (idToRemove: string) => void;
  onChangeCompleteStatus: (idToChange: string) => void;
}

export function Task({
  text,
  isCompleted,
  id,
  onDeleteTask,
  onChangeCompleteStatus,
}: TaskInfo) {
  function handleDelete() {
    onDeleteTask(id);
  }

  function handleChangeCompleteStatus() {
    onChangeCompleteStatus(id);
  }

  return (
    <div className={styles.taskContainer}>
      <button onClick={handleChangeCompleteStatus}>
        <img
          src={isCompleted ? checked : check}
          className={isCompleted ? styles.imgchecked : styles.imgcheck}
        />
      </button>
      <p className={isCompleted ? styles.checkedText : ""}>{text}</p>
      <Trash size={18} className={styles.removeButton} onClick={handleDelete} />
    </div>
  );
}
