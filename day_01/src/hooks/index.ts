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