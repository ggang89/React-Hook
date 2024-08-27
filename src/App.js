import { useState } from "react";

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
}

//useState 사용전 방식
export class AppUgly {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Hello {item}</h1>
        <button onClick={this.incrementItem}>증가</button>
        <button onClick={this.decrementItem}>감소</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.tiem + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.tiem - 1,
      };
    });
  };
}

export default App;
