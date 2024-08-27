import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I am the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I am the content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem:setCurrentIndex
  };
};


export default function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);//만든 배열(content)의 0번째 객체
  return (
    <>
      {content.map((section,index) => (
        <button onClick={() => { changeItem(index) }}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );

}