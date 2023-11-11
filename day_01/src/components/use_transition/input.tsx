import { FC, useState, ChangeEvent, useTransition } from "react"
export const SearchBox: FC = () => {
  const [kw, setKw] = useState('')
  const [, startTranstion] = useTransition()
  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTranstion(() => setKw(e.currentTarget.value))
  }
  return <>
    <input value={kw} onChange={searchChange}></input>
    <hr></hr>
    <SearchResult val={kw}></SearchResult>
  </>
}

const SearchResult: FC<{ val: string }> = (props) => {
  if (!props.val) return
  const items = Array(40000).fill(props.val).map((item,index) => { return <div key={index}>{item}</div>})
  console.log(items)
  return items
}