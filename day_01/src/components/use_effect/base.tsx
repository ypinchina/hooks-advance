import React, { useState, useEffect } from "react"
export const Effect:React.FC = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log(document.querySelector("h1")?.innerText)
    }, [count])
    const toggle = () => {
        setFlag(prev => !prev)
    }
    return (
        <>
            <h1>count的值是： {count}</h1>   <span>{String(flag)}</span>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <button onClick={toggle}>toggle</button>
        </>
    )
}