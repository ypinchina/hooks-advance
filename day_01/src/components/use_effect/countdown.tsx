import React, { useEffect, useState } from "react"

const Countdown = () => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prev => {
                if (prev === 1) {
                    clearInterval(timerId)
                }
                return prev - 1
            })
        }, 1000)
    }, [])
    return count
}

export const TestCountdown:React.FC = () => {
    const timer = Countdown()
    console.log(timer)
    return (<>
        { timer >= 0 ? <button disabled>请仔细阅读本协议内容({ timer }) 秒</button> : <button onClick={() => console.log('成功激活')}>确认此协议</button> }
    </>)
}   