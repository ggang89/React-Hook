import { useRef, useState } from "react";

export default function Counter() {
  const [c, setC] = useState(0);
  let ref = useRef(0);
  let inputRef = useRef(null);
  // let touched = 0;

  function handleClick() {
    ref.current = ref.current + 1;
    //touched = touched + 1;
    alert("You clicked " + ref.current + " times!");
    //alert("You clicked " + touched + " times!");
  }

  function handleC() {
    setC((prev) => prev + 1);
  }

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleC}>Click me!</button>
      <button onClick={handleFocus}>포커싱</button>
      <input ref={inputRef} />
    </>
  );
}
