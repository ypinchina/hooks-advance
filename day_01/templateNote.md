## useDeferredValue  

input输入组件不能使用 useTransition 进行性能优化，因为 useTransition 会把状态更新标记为低优先级，被标记为 transition 的状态更新将被其他状态更新打断。因此在高频率输入时，会导致中间的输入状态丢失的问题。  
即输入'123'之后，最后打断显示在屏幕的效果只有3  


### 语法格式  
useDeferredValue 提供一个 state 的延迟版本，根据其返回的延迟的 state 能够推迟更新 UI 中的某一部分，从而达到性能优化的目的。语法格式如下：  
```
import { useState, useDeferredValue } from 'react';  

function SearchPage() {
  const [kw, setKw] = useState('');
  // 根据 kw 得到延迟的 kw
  const deferredKw = useDeferredValue(kw);
  // ...
}
```
useDeferredValue 的返回值为一个**延迟版**的状态：

在组件首次渲染期间，返回值将与传入的值相同
在组件更新期间，React 将首先使用旧值重新渲染 UI 结构，这能够跳过某些复杂组件的 rerender，从而提高渲染效率。随后，React 将使用新值更新 deferredValue，并在后台使用新值重新渲染是一个**低优先级**的更新。这也意味着，如果在后台使用新值更新时 value 再次改变，它将打断那次更新。
