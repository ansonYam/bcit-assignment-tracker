export type AssignmentType = {
    id: number;
    name: string;
    completed: boolean;
    due_date: Date;
  };
  
export const assignmentsArray: AssignmentType[] = [
    { id: 1, name: 'Assignment 1', completed: true, due_date: new Date('2023-06-01')},
  ];
