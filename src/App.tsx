import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { AssignmentType, assignmentsArray } from "./types/assignmentType";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState<AssignmentType[]>(assignmentsArray);
  const [newAssignmentName, setNewAssignmentName] = useState("");
  // console.log("Starting array: ", assignmentsArray);

  const handleAdd = (newName: string) => {
    const newAssignment: AssignmentType = { 
      id: assignments.length + 1, 
      name: newName,
      completed: false 
    };
    setAssignments([...assignments, newAssignment]);
  };

  const handleDelete = (id: number) => {
    const updatedAssignments = assignments.filter(
      (assignment) => assignment.id !== id
    );
    // console.log("Updated assignments: ", updatedAssignments);
    setAssignments(updatedAssignments);
  };

  const handleComplete = (id: number) => {
    const updatedAssignments = assignments.map(
      (assignment) => assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment)
    console.log("Updated assignments: ", updatedAssignments);
    setAssignments(updatedAssignments);
  }

  return (
    <>
      <Header 
        handleAdd={handleAdd}
        newAssignmentName={newAssignmentName}
        setNewAssignmentName={setNewAssignmentName}
      />
      <Assignments
        assignments={assignments}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </>
  );
}

export default App;
