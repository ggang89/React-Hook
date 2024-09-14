import { useRef, useState } from "react";

export default function Counter() {
  const [c, setC] = useState(0);
  let ref = useRef(0);
  let inputRef = useRef(null);
  // let touched = 0;

  function handleClick() {
    ref.current = ref.current + 1; //ref.current 프로퍼티를 변경해도 리렌더링 되지 않음
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
//useRef => 렌더링에 필요하지 않은 값을 참조할 때 사용