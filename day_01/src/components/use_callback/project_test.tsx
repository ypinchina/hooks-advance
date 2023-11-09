import React from "react";
export const SearchBox:React.FC = () => {
    return (<>
            {/* 搜索框组件 */}
            <SearchInput></SearchInput>
            <hr></hr>
            {/* 搜索结果组件 */}
    </>)



}
const SearchInput: React.FC = () => {
    return <>
        <input type="text" />
    </>
}