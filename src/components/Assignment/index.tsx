import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { differenceInDays, format } from "date-fns";

interface Props {
  id: number;
  name: string;
  completed: boolean;
  due_date: Date;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

export function Assignment({ id, name, completed, due_date, handleDelete, handleComplete }: Props) {
  function handleClick() {
    handleDelete(id);
  }

  function handleCompleteClick() {
    handleComplete(id);
  }

  const today = new Date();
  const daysLeft = differenceInDays(due_date, today);

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleCompleteClick}>
        {completed ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p className={completed ? styles.textCompleted : ""}>{name}</p>

      {daysLeft === 1 ?
        <div className={styles.urgent}>
          <p> Due: tomorrow </p>
        </div> :
        <div className={styles.dueDateBubble}>
          <p> Due: {daysLeft} days </p>
        </div>
      }

      <button className={styles.deleteButton} onClick={() => handleClick()}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}