import { useState } from "react";

function Color() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => setColor("lightblue")}>
        Blue
      </button>
    </div>
  );
}

export default Color;