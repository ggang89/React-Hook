import { useState } from "react";

export default function UseState() {
  const [like, setLike] = useState(true);
  const handleChange = (e) => {
    setLike(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={like} onChange={handleChange} />
        ❤Like
      </label>
      <p>I {like ? "Like this." : "Don't Like this"}</p>
    </>
  );
}
//useState => 두 개의 값(초기값, set함수)을 가진 배열을 반환한다