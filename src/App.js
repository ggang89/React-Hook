import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target.value);
  };
  return { value, onChange };
  //기본값(Mr.)을 value 와 함께 return 하기
};
function App() {
  const name = useInput("Mr. ");
  console.log(name)
  return (
    <div>
      <h1>Hello </h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
}

//useState 사용전 방식

export default App;
