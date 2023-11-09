import React, { useState, useEffect } from "react";
type SearchInputType = { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }

export const SearchBox: React.FC = () => {
    const [kw, setKw] = useState('')
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKw(event.currentTarget.value)
    }
    return (<>
        {/* 搜索框组件 */}
        <SearchInput onChange={inputChange}></SearchInput>
        <hr></hr>
        {/* 搜索结果组件 */}
        <SearchResult query={kw}></SearchResult>
    </>)



}
const SearchInput: React.FC<SearchInputType> = (props) => {
    return <>
        <input type="text" onChange={props.onChange} />
    </>
}

const SearchResult: React.FC<{ query: string }> = (props) => {
    const [list, setList] = useState([])
    useEffect(() => {
        if (!props.query) return
        fetch('https://api.liulongbin.top/v1/words?kw=' + props.query).then(res => res.json()).then(res => {
            if (res.message === 'success') {
                setList(res.data)
            }
        })
    }, [props.query])
    return list.map((item: { id: number; word: string }) => <div key={item.id}>{item.word}</div>)
}