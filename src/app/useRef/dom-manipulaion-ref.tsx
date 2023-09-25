import { useRef } from "react";

export default function DOMManipulationRef() {
  const inputRef: any = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} placeholder="type here" />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
}
