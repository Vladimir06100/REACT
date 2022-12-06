import { useState } from "react";
import "./App.css";

const initialStudents = [
  "Rouslan",
  "Natalia",
  "Roger",
  "Laura",
  "Mykhailo",
  "Cassandra",
  "Bastien",
  "Damien",
  "Thomas",
  "Ibrahima",
  "Vladimir"
];

function App() {

  let initialStudentsCopy = [...initialStudents];

  const [activeStudent, setActiveStudent] = useState("");
  const [students, setStudents] = useState(initialStudentsCopy);

  const handleRandomClick = (index) =>{

    // Returns a random integer from 0 to 9:
    const randomIndex = Math.floor(Math.random() * students.length);
    setActiveStudent(students[randomIndex])

    let newStudents = students;
    newStudents.splice(randomIndex, 1);
    setStudents(newStudents);
  }

  const handleReset = () =>{

    let initialStudentsCopy = [...initialStudents];

    setActiveStudent("");
    setStudents(initialStudentsCopy);
  }

  const studentClick = (index) =>{
    console.log("studentClick");

    setActiveStudent(students[index])

    let newStudents = students;
    newStudents.splice(index, 1);
    setStudents(newStudents);
  }

  return (
    <div className="App">
      <p className="active_student_p">Au tour de : <span className="active_student">{activeStudent}</span></p>
      <div className="buttons">
        <button onClick={() => handleRandomClick()}>Choisir au hasard</button>
        <button onClick={() => handleReset()}>Réinitialiser</button>
      </div>      
      {students.map((student, index) => (
        <div className="student" key={index} onClick={() => studentClick(index)}>
        {student}
    </div>
      ))}      
    </div>
  );
}

export default App;
