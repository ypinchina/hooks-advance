import { FC, useState, ChangeEvent, useTransition, useDeferredValue, memo } from "react"
export const SearchBox: FC = () => {
  const [kw, setKw] = useState('')
  const [, startTranstion] = useTransition()
  const defferedKw = useDeferredValue(kw)
  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    startTranstion(() => setKw(e.currentTarget.value))
  }
  return <>
    <div style={{ height: 500 }}>
      <input value={kw} onChange={searchChange}></input>
      <hr></hr>
      <div style={{ opacity: kw !== defferedKw ? 0.3 : 1, transition: 'opacity 0.5s ease' }}>
        <SearchResult val={defferedKw}></SearchResult>
      </div>
    </div >
  </>
}
// 4. 子组件必须使用 React.memo() 进行包裹，这样当 props 没有变化时，会跳过子组件的 rerender
const SearchResult: FC<{ val: string }> = memo((props) => {
  if (!props.val) return
  const items = Array(40000).fill(props.val).map((item, index) => { return <div key={index}> {item}</div > })
  return items
})