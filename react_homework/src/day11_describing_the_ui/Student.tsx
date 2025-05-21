// /*
//     implement a Student component here
//     it should take a prop "student" which is an object with the following properties:
//     - id: number
//     - name: string
//     - age: number
//     - grade: Enum("A", "B", "C", "D", "F")

//     it should render the student's information
// */

import { Component } from "react";

// // implement a Student component here

// export interface StudentType {}

// export function StudentFn() {
//   return <div data-testid="student"></div>;
// }

// export class StudentClass extends Component {
//   render() {
//     return <div data-testid="student">Student</div>;
//   }
// }



// Define the Grade enum
export enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

// Define the StudentType interface
export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: Grade;
}

// Functional component version
export function StudentFn({ student }: { student: StudentType }) {
  return (
    <div data-testid="student">
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

// Class component version
export class StudentClass extends Component<{ student: StudentType }> {
  render() {
    const { student } = this.props;
    return (
      <div data-testid="student">
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Grade: {student.grade}</p>
      </div>
    );
  }
}
