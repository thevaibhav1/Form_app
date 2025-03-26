import React from "react";
import { NewMainGoal } from "./Components/NewMainGoal";
function App() {
  return (
    <div>
      <NewMainGoal />
    </div>
  );
}
export default App;
// import { useState, useEffect } from "react";

// function ProgressBar() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20); // 20ms interval * 100 steps = ~2000ms total fill

//     return () => clearInterval(interval);
//   }, []);

//   return <progress value={count} max={100} />;
// }
