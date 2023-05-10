import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface Props {
  id: number;
  completed: boolean;
  handleDelete: (id: number) => void;
}

export function Assignment({id, completed, handleDelete}: Props) {
  function handleClick() {
    handleDelete(id);
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{`Assignment #${id}`}</p>

      <button className={styles.deleteButton} onClick={() => handleClick()}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}