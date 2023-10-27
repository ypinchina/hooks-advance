import React, { useRef, useState } from "react";

export const InputRef: React.FC = () => {
  const inputDom = useRef<HTMLInputElement>(null);
  const getFocus = () => {
    inputDom.current?.focus();
  };
  return (
    <>
      <input type="text" ref={inputDom} />
      <button onClick={getFocus}>click</button>
    </>
  );
};

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  // let oldVal; 不能这样写，因为函数组件更新count值的时候重新执行这个函数组件方法，会重新给oldVal赋值为undefined
  // const add = () => {
  //   setCount((prev) => prev + 1);
  //   oldVal = count;
  // };
  const oldVal = useRef<number>();
  const add = () => {
    setCount((prev) => prev + 1);
    oldVal.current = count;
  };
  return (
    <>
      <h1>
        新值是：{count}, 旧值是： {oldVal.current}
      </h1>
      <button onClick={add}>+1</button>
    </>
  );
};

export const RefSpecial: React.FC = () => {
  const [count, setCount] = useState(0);
  const nowDate = useRef(new Date().getTime());
  const updateTime = () => {
    nowDate.current = new Date().getTime();
    console.log(nowDate.current);
  };
  console.log("组件渲染");
  return (
    <>
      <h1>
        count的值是{count}， 时间戳是：{nowDate.current}
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={updateTime}>更新时间</button>
    </>
  );
};
