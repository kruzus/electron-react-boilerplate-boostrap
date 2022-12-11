import { useState } from "react";

export default function Counter() {
  const [count,setCount] = useState(1);
  return (
    <>
      <div>
        <h1>Counter value: {count}</h1>
        <button onClick={() => {setCount(count + 1)}} type="button">Count</button>
      </div>
    </>
  );
}
