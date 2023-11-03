import React, { useLayoutEffect, useState } from "react"

const Random:React.FC = () => {
    const [count, setCount] = useState(Math.random() * 10)
    // 使用useEffect页面 count值切换成0的时候有闪烁。  改用 useLayoutEffect解决这个问题
    useLayoutEffect(() => {
        // 改用useLayoutEffect这个钩子之后 确实不会闪烁了
        if (count === 0) {
            setCount(Math.random() * 10)
        }
    }, [count])
    return (<>
        <h1>随机数字是: { count }</h1>
        <button onClick={() => setCount(0)}>reset</button>
    </>)
}

export const LayoutEffect:React.FC = () => {
    return (<>
        <Random></Random>
    </>)
}