import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  id: number;
  name: string;
  completed: boolean;
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

export function Assignment({id, name, completed, handleDelete, handleComplete}: Props) {
  function handleClick() {
    handleDelete(id);
  }

  function handleCompleteClick() {
    handleComplete(id);
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleCompleteClick}>
        {completed ? <BsFillCheckCircleFill size={20} /> : <div />}
      </button>

      <p className={completed ? styles.textCompleted : ""}>{name}</p>

      <button className={styles.deleteButton} onClick={() => handleClick()}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}