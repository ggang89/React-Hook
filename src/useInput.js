import { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
  //기본값(Mr.)을 value 와 함께 return 하기
};
export default function UseInputApp() {
  const maxLen = (value) => value.length <= 10 && !value.includes("@");
  const name = useInput("Mr. ", maxLen);
  console.log(name);
  return (
    <div>
      <h1>Hello </h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
}
