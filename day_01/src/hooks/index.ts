import { useEffect, useState } from "react"
export const useMouseInfo = (delay:number = 0) => {
    const [position, setPosition] = useState({x: 0, y: 0})
    // 增加节流函数
    useEffect(() => {
        let timer: null | NodeJS.Timeout = null
        const mouseMoveSetPosition = (e: MouseEvent) => {
            if (timer !== null) return 
            timer = setTimeout(() => {
                console.log({x: e.clientX, y: e.clientY})
                setPosition({x: e.clientX, y: e.clientY})
                timer = null
            }, delay)
        }
        window.addEventListener("mousemove", mouseMoveSetPosition)
        return () => {
            window.removeEventListener("mousemove", mouseMoveSetPosition)
        }
    }, [])
    return position
}
type UseCountDown = (seconds: number) => [number, boolean]
export const useCountDown:UseCountDown = (seconds = 10) => {
    // 如果没传参数，默认参数是10， 如果传参是0则变为10
    seconds = Math.round(Math.abs(seconds)) || 10
    const [count, setCount] = useState(seconds)
    const [disabled, setDisable] = useState(true) 
    useEffect(() => {
        setTimeout(() => {
            if (count > 1) {
                setCount(prev => prev - 1)
            } else {
                setDisable(false)
            }
        }, 1000)
        // return () => clearTimeout(timerId)
    }, [count])
    return [count, disabled]
}