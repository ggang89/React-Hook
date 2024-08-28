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
      {content.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => {
              changeItem(index);
            }}
          >
            {section.tab}
          </button>
        </div>
      ))}
      {/* 이런 경우에 key를 어디에,무엇을 써줘야 하나 index쓴다.id를 생성해준다*/}
      <div>{currentItem.content}</div>
    </>
  );

}