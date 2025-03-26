import { useState } from "react";
const NewMainGoal = () => {
  const [goal, setGoal] = useState([]);
  const handleGoal = () => {
    const newgoal = ["goal", "ngoal"];
    let result = newgoal.push("newgoal");
    result = newgoal.push("newgoa");
    const li = <p>name</p>;
    console.log(newgoal, result);
  };
  return (
    <div>
      <h2>{li}</h2>
      <button onClick={handleGoal}>Set</button>
    </div>
  );
};
export { NewMainGoal };
