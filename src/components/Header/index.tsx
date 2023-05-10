import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header() {
  const [assignment, setAssignment] = useState("");
  const [disabled, setDisabled] = useState(true);

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(e) => {
            setAssignment(e.target.value);

            if (e.target.value.length < 1) {
              setDisabled(true);
            } else {
              setDisabled(false); 
            }
          }} />
        <button disabled={disabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
