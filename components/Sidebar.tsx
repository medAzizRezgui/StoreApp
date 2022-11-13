"use client";

import React, { useState } from "react";

export default function Sidebar() {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>Sidebar</h1>

      <button onClick={() => setState(state + 1)}>Click</button>
      <h1>{state}</h1>
    </>
  );
}
