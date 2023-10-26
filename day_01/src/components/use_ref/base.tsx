import React, { useRef } from "react";
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
