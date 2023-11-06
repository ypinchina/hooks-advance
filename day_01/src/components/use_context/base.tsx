import React, { useState } from 'react'

export const LevelA: React.FC = () => {
  // 定义状态
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 30, backgroundColor: 'lightblue', width: '50vw' }}>
      <p>count值是：{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      {/* 使用子组件 */}
      <LevelB />
    </div>
  )
}

export const LevelB: React.FC = () => {
  return (
    <div style={{ padding: 30, backgroundColor: 'lightgreen' }}>
      {/* 使用子组件 */}
      <LevelC />
    </div>
  )
}

export const LevelC: React.FC = () => {
  return (
    <div style={{ padding: 30, backgroundColor: 'lightsalmon' }}>
      <button>+1</button>
      <button>重置</button>
    </div>
  )
}