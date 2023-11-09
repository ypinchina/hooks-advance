import React, { useState, useMemo } from 'react'

// 父组件
export const Father: React.FC = () => {
  // 定义 count 和 flag 两个状态
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  const tips = useMemo(() => {
    console.log('触发了tips函数的渲染')
    return flag ? <p>瞎说哪里贵了</p> : <p>这么多年没涨工资，想想是不是自己的问题</p>
  }, [flag])
  return (
    <>
      <h1>父组件</h1>
      <p>count 的值是：{count}</p>
      <p>flag 的值是：{String(flag)}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <hr />
      { tips }
    </>
  )
}
