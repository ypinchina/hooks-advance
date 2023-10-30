import React, { useState, useRef } from "react"
export const Child: React.FC = () => {
  const [count, setCount] = useState(0)
  const add = (step: number) => {
    setCount(prev => prev += step)
  }
  return (<>
      <h2>count的值是： {count}</h2>
      <button onClick={() => add(+1)}>+1</button>
      <button onClick={() => add(-1)}>-1</button>
  </>)
}

export const Father: React.FC = () => {
  const childRef = useRef()
  return (<>
    <h1>这是Father组件</h1>
    <hr></hr>
    <Child ref={childRef}></Child>
  </>)
}