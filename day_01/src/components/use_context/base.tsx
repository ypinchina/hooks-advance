import React, { useContext } from "react";
import { AppContext } from "./AppContext";
export const LevelA: React.FC = () => {
  const { count, setCount } = useContext(AppContext);
  // 定义状态
  return (
    <div style={{ padding: 30, backgroundColor: "lightblue", width: "50vw" }}>
      <p>count值是：{count}</p>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+1</button>
      {/* 使用子组件 */}
      <LevelB />
    </div>
  );
};

export const LevelB: React.FC = () => {
  return (
    <div style={{ padding: 30, backgroundColor: "lightgreen" }}>
      {/* 使用子组件 */}
      <LevelC />
    </div>
  );
};

export const LevelC: React.FC = () => {
  const { count, setCount } = React.useContext(AppContext);
  return (
    <div style={{ padding: 30, backgroundColor: "lightsalmon" }}>
      <p>count的值是：{count}</p>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+1</button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  );
};
