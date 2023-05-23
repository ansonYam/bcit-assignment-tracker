import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentType } from "../../types/assignmentType";

interface Props {
  assignments: AssignmentType[];
  handleDelete: (id: number) => void;
  handleComplete: (id: number) => void;
}

export function Assignments({assignments, handleDelete, handleComplete}: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignments.filter((assignment) => assignment.completed).length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
          {assignments.map((assignment) => (
            <Assignment key={assignment.id}
              id={assignment.id}
              name={assignment.name}
              completed={assignment.completed}
              due_date={assignment.due_date}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
      </div>
    </section>
  );
}
