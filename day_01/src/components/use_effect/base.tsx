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

const ColorCom: React.FC  = () => {
    const [color, setColor] = useState('')
    useEffect(() => {
        const controller = new AbortController()
        fetch('https://api.liulongbin.top/v1/color', { signal: controller.signal })
        .then((res) => res.json()).then(res => {
            console.log(res)
            setColor(res.data.color)
        }).catch(err => {
            console.log(err)
        })
        return () => {
            // 用于清除副作用的回调函数
            controller.abort()
        }
    }, [])
    return (<>
        <p>color的颜色是: {color}</p>
    </>)
}
export const TextColorCom: React.FC = () => {
    const [flag, setFlag] = useState(true)
    const toggleFlag = () => {
        setFlag(prev => !prev)
    }
    return (<>
        <button onClick={toggleFlag}>切换</button>
        <hr></hr>
        { flag && <ColorCom></ColorCom> }
    </>)
}