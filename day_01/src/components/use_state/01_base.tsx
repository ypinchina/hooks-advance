import React, { useState } from "react";
export const Count: React.FC = () => {
  console.log("函数执行了");
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count的值是: {count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
};
export const DateCom: React.FC = () => {
  const [date] = useState(() => {
    const dt = new Date();
    return {
      year: dt.getFullYear(),
      month: dt.getMonth() + 1,
      day: dt.getDate(),
    };
  });
  return (
    <>
      <h1>日期格式是: </h1>
      <div>
        <div>年: {date.year}</div>
        <div>月: {date.month}</div>
        <div>日: {date.day}</div>
      </div>
    </>
  );
};
