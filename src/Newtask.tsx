import styles from "./Newtask.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { useState, ChangeEvent, FormEvent } from "react";

interface NewTaskProps {
  onNewTask: (newText: string) => void;
}

export function Newtask({ onNewTask }: NewTaskProps) {
  //Monitoring comments
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }

  //Post new comment function (onSubmit)
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    onNewTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <form onSubmit={handleCreateNewComment} className={styles.newtask}>
      <textarea
        onChange={handleNewTaskChange}
        value={newTaskText}
        placeholder="Create a new task"
        required
      />
      <button className={styles.newTaskButton} type="submit">
        <div className={styles.buttonName}>
          <span>Add</span>
          <PlusCircle size={16} />
        </div>
      </button>
    </form>
  );
}
