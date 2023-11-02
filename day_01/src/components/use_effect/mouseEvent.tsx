import { useMouseInfo } from "@/hooks"
import React , { useState } from "react"

const MouseInfo:React.FC = () => {
    const position = useMouseInfo(500)
    console.log(position)
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