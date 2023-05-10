import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { AssignmentType, assignmentsArray } from "./types/assignmentType";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState<AssignmentType[]>(assignmentsArray);
  console.log("Starting array: ", assignmentsArray);

  const handleAdd = () => {
    const newAssignment = { id: assignments.length + 1, completed: false };
    setAssignments([...assignments, newAssignment]);
  };

  const handleDelete = (id: number) => {
    const updatedAssignments = assignments.filter(
      (assignment) => assignment.id !== id
    );
    console.log("Updated assignments: ", updatedAssignments);
    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header />
      <Assignments
        assignments={assignments}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
