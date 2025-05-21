import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

// /*
//     implement a StudentsList component here
//     it should take a prop "students" which is an array of students

//     it should render a list of Student components
// */

// // implement a StudentsList component here
// export function StudentsListFn() {
//   return <div>Students List</div>;
// }

// export class StudentsListClass extends Component {
//   render() {
//     return <div>Students List</div>;
//   }
// }



// Functional component version
export function StudentsListFn({ students }: { students: StudentType[] }) {
  return (
    <div data-testid="students-list">
      {students.map((student) => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}

// Class component version
export class StudentsListClass extends Component<{ students: StudentType[] }> {
  render() {
    const { students } = this.props;
    return (
      <div data-testid="students-list">
        {students.map((student) => (
          <StudentClass key={student.id} student={student} />
        ))}
      </div>
    );
  }
}
