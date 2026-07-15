import { useState } from "react";

function GradeCalculator() {
  const [mark, setMark] = useState("");
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    if (mark >= 90)
      setGrade("A+");
    else if (mark >= 80)
      setGrade("A");
    else if (mark >= 70)
      setGrade("B");
    else if (mark >= 60)
      setGrade("C");
    else
      setGrade("Fail");
  };

  return (
    <div style={{
  textAlign: "center",
  backgroundColor: "lightblue",
  minHeight: "100vh",
  paddingTop: "50px"
}}>
      <h2 style={{ color: "black" }}>Grade Calculator</h2>

      <input
        type="number"
        placeholder="Enter Marks"
        onChange={(e) => setMark(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={calculateGrade}>
        Calculate Grade
      </button>

      <h3>Grade : {grade}</h3>
    </div>
  );
}

export default GradeCalculator;