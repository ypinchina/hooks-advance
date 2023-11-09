import React, { useEffect, useState } from 'react'

// 父组件
export const Father: React.FC = () => {
  // 定义 count 和 flag 两个状态
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  return (
    <>
      <h1>父组件</h1>
      <p>count 的值是：{count}</p>
      <p>flag 的值是：{String(flag)}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <hr />
      <Son num={count} />
    </>
  )
}

// 子组件：依赖于父组件通过 props 传递进来的 num
export const Son: React.FC<{ num: number }> = React.memo(({ num }) => {
  useEffect(() => {
    console.log('触发了子组件的渲染')
  })
  return (
    <>
      <h3>子组件 {num}</h3>
    </>
  )
})