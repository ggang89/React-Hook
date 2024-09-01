import { useState } from "react";

export default function UseState() {
  const [like, setLike] = useState(true);
  const [counter, setCounter] = useState(0);
  const [form, setForm] = useState({
    name: "psy",
    detail: {
      gender: "woman",
      age:35
    }
  })
  const handleChange = (e) => {
    setLike(e.target.checked);
  };
  const increase = () => {
    setCounter((c) => c + 1);
    //setCounter(counter +1)이 아니라 업데이트 함수로 전달!
    //state가 이전 state에서 계산되어서 사용됨
  };
  
  const nameChange = (e) => {
    setForm({
      ...form,
      name: e.target.value
    })
  }
  const genderChange = (e) => {
    setForm({
      ...form,
      detail: {
        ...form.detail,
        gender: e.target.value
      }
    })
  }
  const ageChange = (e) => {
    setForm({
      ...form,
      detail:{
        ...form.detail,
        age: e.target.value
      }
    })
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={like} onChange={handleChange} />
        ❤Like
      </label>
      <p>I {like ? "Like this." : "Don't Like this"}</p>
      
      <p>
        {counter}{" "}
        <button
          onClick={() => {
            increase();
            increase();
            increase();
          }}
        >
          +3
        </button>
      </p>
      <form>
        <label>Name: <input value={form.name} onChange={nameChange}/></label>
        <label>Gender:<input value={form.detail.gender} onChange={genderChange} /></label>
        <label>Age:<input value={form.detail.age} onChange={ageChange}/></label>
      </form>

    </>
  );
}
//useState => 두 개의 값(초기값, set함수)을 가진 배열을 반환한다
