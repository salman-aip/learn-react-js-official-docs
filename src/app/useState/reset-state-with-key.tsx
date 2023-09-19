"use client";

import { useState } from "react";

export default function ResetStateWithKey() {
  const [version, setVersion] = useState(0);

  const handleReset = () => {
    setVersion((prev) => prev + 1);
  };

  return (
    <div className="bg-white text-black flex flex-col">
      <button onClick={handleReset}>Reset</button>

      {/* pass keys */}
      <Form key={version} />
    </div>
  );
}

export function Form() {
  const [name, setName] = useState("Salman");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} className="border-2" />
      <p>Hello, {name}.</p>
    </>
  );
}
