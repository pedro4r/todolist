import styles from "./Tasklist.module.css";
import { ClipboardText, Trash } from "@phosphor-icons/react";
import { Task } from "./Task";

interface TaskListProps {
  taskList: TaskObjects[];
  onDeleteTask: (idToRemove: string) => void;
  onChangeCompleteStatus: (idToChange: string) => void;
}

interface TaskObjects {
  id: string;
  text: string;
  isCompleted: boolean;
}

export function Tasklist({
  taskList,
  onDeleteTask,
  onChangeCompleteStatus,
}: TaskListProps) {
  const totalCompleted = taskList.reduce((acc, item) => {
    if (item.isCompleted) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className={styles.tasklist}>
      <div className={styles.tasksCounter}>
        <div className={styles.totalTasks}>
          <span className={styles.createdTasksTitle}>Tasks Created</span>
          <div className={styles.counter}>
            <span>{taskList.length}</span>
          </div>
        </div>
        <div className={styles.completedTasks}>
          <div className={styles.totalTasks}>
            <span className={styles.completedTasksTitle}>Completed</span>
            <div className={styles.counter}>
              <span>{totalCompleted}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.listContainer}>
        {taskList.length === 0 ? (
          <div className={styles.emptyMessage}>
            <ClipboardText size={56} className={styles.emptyMessageIcon} />
            <span className={styles.firstEmptyMessage}>
              You haven't created any tasks yet
            </span>
            <span className={styles.secondEmptyMessage}>
              Create and organize your tasks
            </span>
          </div>
        ) : (
          taskList.map((item) => {
            return (
              <Task
                key={item.id}
                id={item.id}
                text={item.text}
                isCompleted={item.isCompleted}
                onDeleteTask={onDeleteTask}
                onChangeCompleteStatus={onChangeCompleteStatus}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
