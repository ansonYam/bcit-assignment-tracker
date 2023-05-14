export type AssignmentType = {
    id: number;
    name: string;
    completed: boolean;
  };
  
export const assignmentsArray: AssignmentType[] = [
    { id: 1, name: 'Assignment 1', completed: true },
    { id: 2, name: 'Assignment 2', completed: false },
    { id: 3, name: 'Assignment 3', completed: true },
  ];
