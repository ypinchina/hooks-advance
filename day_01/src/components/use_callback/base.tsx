import React, { useState, useCallback } from "react"
const setObj = new Set()
export const Search: React.FC = () => {
    const [kw, setKw] = useState('')
    const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setKw(e.currentTarget.value)
    }, [])
    setObj.add(inputChange)
    console.log(setObj.size)
    return <>
        <input value={kw} onChange={inputChange}></input>
        <hr></hr>
        <p>{kw}</p>
    </>
}