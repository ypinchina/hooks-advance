import React from "react"
import { useCountDown } from "@/hooks"

export const TestCountdown:React.FC = () => {
    const [timer, disabled] = useCountDown(10)
    console.log(timer)
    return (<>
        <button disabled={disabled} onClick={() => console.log('成功激活')}>{  disabled ? `请仔细阅读本协议内容(${ timer }) 秒` : '确认此协议'}</button>
    </>)
}   