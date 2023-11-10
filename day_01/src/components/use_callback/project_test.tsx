import React, { useState, useEffect, useCallback } from "react";
type SearchInputType = { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }

export const SearchBox: React.FC = () => {
    const [kw, setKw] = useState('')
    // 因为输入时kw值改变，所以父组件重新渲染；由于父组件重新渲染，进而使得子组件重新渲染
    const inputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setKw(event.currentTarget.value)
    }, [])
    return (<>
        {/* 搜索框组件 */}
        <SearchInput onChange={inputChange}></SearchInput>
        <hr></hr>
        {/* 搜索结果组件 */}
        <SearchResult query={kw}></SearchResult>
    </>)



}
const SearchInput: React.FC<SearchInputType> = React.memo((props) => {
    console.log('子组件被渲染了')
    //  缓存了该组件依然没有效果，因为props中的onChange每次都在变成新的引用
    return <>
        <input type="text" onChange={props.onChange} />
    </>
})

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