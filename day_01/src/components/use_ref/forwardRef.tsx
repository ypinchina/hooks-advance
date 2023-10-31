import React, { useState, useRef, forwardRef, useImperativeHandle } from "react"
export const Child = forwardRef((_, ref) => {
    const [count, setCount] = useState(0)
    const add = (step: number) => {
      setCount(prev => prev += step)
    }
    useImperativeHandle(ref, () => {
      return {
        count,
        reset: () => setCount(0)
      }
    })
    return (<>
      <h2>count的值是： {count}</h2>
      <button onClick={() => add(+1)}>+1</button>
      <button onClick={() => add(-1)}>-1</button>
  </>)
  })

export const Father: React.FC = () => {
  const childRef = useRef<{ count: number, reset:() => void }>()
  const showRef = () => {
    console.log(childRef.current)
  }
  const resetFn = () => {
    childRef.current?.reset()
  }
  return (<>
    <h1>这是Father组件</h1>
    <button onClick={showRef}>show Ref</button>
    <button onClick={resetFn}>重置</button>
    <hr></hr>
    <Child ref={childRef}></Child>
  </>)
}