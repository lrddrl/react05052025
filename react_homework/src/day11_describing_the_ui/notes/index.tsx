// export default function Day11Notes() {
//   return (
//     <div>
//       <h1>Day 11 Notes</h1>
//       {/* This is your play around code */}
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Day11Notes() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h1>Day 11 Notes</h1>
      <ul>
        <li>Learn React components</li>
        <li>Practice hooks</li>
        <li>Build small projects</li>
      </ul>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Motivation
      </button>
      {showMessage && <p>Keep coding every day! 🚀</p>}
    </div>
  );
}
