"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
import { Counter } from "../../../redux/features/counter/Counter";
import { useState } from "react";

export default function Setting() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1 className={"text-cyan-400"}>Hello from Setting page</h1>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>Click me</button>
      <Counter />
    </div>
  );
}
