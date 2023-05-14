import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

interface Props {
  handleAdd: (newName: string) => void;
  newAssignmentName: string;
  setNewAssignmentName: (name: string) => void;
}

export function Header({handleAdd, newAssignmentName, setNewAssignmentName}: Props) {
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // don't do the default behaviour
    handleAdd(newAssignmentName); // add the new assignment to the array upstairs
    setNewAssignmentName(""); // clear the state variable
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
        className={styles.newAssignmentForm}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Add a new assignment"
          type="text"
          value={newAssignmentName}
          onChange={(e) => {
            setNewAssignmentName(e.target.value);

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
