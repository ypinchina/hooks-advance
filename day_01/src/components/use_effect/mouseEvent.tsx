import React , { useEffect, useState } from "react"

const MouseInfo:React.FC = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const mouseMoveSetPosition = (e: MouseEvent) => {
        // 增加节流函数
        let timer: null | NodeJS.Timeout = null
        if (!timer) {
            timer = setTimeout(() => {
                setPosition({x: e.clientX, y: e.clientY})
                timer = null
            }, 500)
        }
    }
    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveSetPosition)
        console.log(position)
        return () => {
            window.removeEventListener("mousemove", mouseMoveSetPosition)
        }
    }, [position])
    return (<>
        <p>鼠标的位置是: {JSON.stringify(position)}</p>
    </>)
}

export const TestMouseInfo:React.FC = () => {
    const [flag, setFlag] = useState(true)
    return (<>
        <button onClick={() => setFlag(prev => !prev)}>隐藏</button>
        { flag && <MouseInfo></MouseInfo> }
    </>)
}