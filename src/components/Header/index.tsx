import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { format } from 'date-fns';
import { DayPicker } from "react-day-picker";

interface Props {
  handleAdd: (newName: string, dueDate: Date) => void;
  newAssignmentName: string;
  setNewAssignmentName: (name: string) => void;
}

export function Header({ handleAdd, newAssignmentName, setNewAssignmentName }: Props) {
  const [disabled, setDisabled] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // don't do the default behaviour

    if (newAssignmentName && selectedDate) {
      handleAdd(newAssignmentName, selectedDate); // add the new assignment to the array upstairs
      setNewAssignmentName(""); // clear the state variable  
      setSelectedDate(undefined);
      setDisabled(true);
    }
  }

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, 'PP')}.</p>
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
            const value = e.target.value;
            setNewAssignmentName(value);
            if (value.length < 1 || !selectedDate) {
              setDisabled(true);
            } else {
              setDisabled(false);
            }
          }} />
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            setSelectedDate(date);
            if (!date || newAssignmentName.length < 1) {
              setDisabled(true);
            } else {
              setDisabled(false);
            }
          }}
          footer={footer}
        />
        <button disabled={disabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
