import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentType } from "../../types/assignmentType";

interface Props {
  assignments: AssignmentType[];
  handleDelete: (id: number) => void;
}

export function Assignments({assignments, handleDelete}: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
          {assignments.map((assignment) => (
            <Assignment key={assignment.id}
              id={assignment.id}
              completed={assignment.completed}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </section>
  );
}
