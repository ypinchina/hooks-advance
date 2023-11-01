# 课程目的与意义



本课程是本人在学习react的基础课程之后，再深入学react hooks相关知识和更多API的进阶课程，本课程开课与2023年10月24日。

## useState

useState，能让函数组件拥有自己的状态，因此，它是一个管理状态的 hooks API。通过 useState 可以实现状态的初始化、读取、更新。基本语法格式如下：

```
const [状态名, set函数] = useState(初始值)
```

其中：状态名所代表的数据，可以被函数组件使用；如果要修改状态名所代表的数据，需要调用 **set 函数**进行修改。

### 状态变化时，会触发函数组件的重新执行

在函数组件中使用 setState 定义状态之后，每当状态发生变化，都会触发函数组件的重新执行(即再次调用函数组件方法)，从而根据最新的数据更新渲染 DOM 结构。

- 注意：当函数式组件被重新执行时，不会重复调用 useState() 给数据赋初值，而是会复用上次的 state 值。

### 以函数的形式为状态赋初始值

在使用 useState 定义状态时，除了可以直接给定初始值，还可以通过函数返回值的形式，为状态赋初始值，语法格式如下：

const [value, setValue] = useState(() => 初始值)

- 注意：以函数的形式为状态赋初始值时，只有组件首次被渲染才会执行 fn 函数；当组件被更新时，会以更新前的值作为状态的初始值，赋初始值的函数不会执行。

### useState 是异步变更状态的

调用 useState() 会返回一个变更状态的函数，这个函数内部是以异步的形式修改状态的，所以修改状态后无法立即拿到最新的状态

如下代码

```
  const [count, setCount] = useState(() => 0)

  const add = () => {
    // 1. 让数值自增+1
    setCount(count + 1)
    // 2. 打印 count 的值
    console.log(count)
  }
```

setCount 是异步执行的，会先执行 console.log

### 解决值更新不及时的 Bug

当连续多次以相同的操作更新状态值时，React 内部会对传递过来的新值进行比较，如果值相同，则会屏蔽后续的更新行为，从而防止组件频繁渲染的问题。这虽然提高了性能，但也带来了一个使用误区

```
  const [count, setCount] = useState(() => 0)

  const add = () => {
    // 1. 希望让 count 值从 0 自增到 1
    setCount(count + 1)
    // 2. 希望让 count 值从 1 自增到 2
    setCount(count + 1)
  }
```

如以上代码页面上显示当前 count 的值是 1 ，而不是 2，**why**??

因为 setCount 是**异步**地更新状态值的，所以前后两次调用 setCount 传递进去的新值都是 1。React 内部如果遇到两次相同的状态，则会**默认阻止组件再次更新**。

解决方法如下

```
  const [count, setCount] = useState(() => 0)

  const add = () => {
    // 1. 希望让 count 值从 0 自增到 1
    setCount((prev) => prev + 1)
    // 2. 希望让 count 值从 1 自增到 2
    setCount((prev) => prev + 1)
  }
```

解释：为了解决上述的问题，我们可以使用函数的方式给状态赋新值。当函数执行时才通过函数的形参，拿到当前的状态值，并基于它返回新的状态值

### useState 修改对象的属性的问题

```
  const changeUserInfo = () => {
    userInfo.name = "carrick";
    userInfo.age = 30;
    userInfo.gender = "female";
    // setUserInfo(userInfo); // 错误的 ， 对象引用没有发生改变，react不会刷新组件

    // 正确写法
    // setUserInfo({...userInfo})
    // 或者
    setUserInfo(Object.assign({}, userInfo));
  };
```

### 使用 setState 模拟组件的强制刷新

在函数组件中，我们可以通过 useState 来模拟 forceUpdate 的强制刷新操作。因为只要 useState 的状态发生了变化，就会触发函数组件的重新渲染，从而达到强制刷新的目的
代码如下

```
const [, forceUpdate] = useState({})

  // 每次调用 onRefresh 函数，都会给 forceUpdate 传递一个新对象
  // 从而触发组件的重新渲染
  const onRefresh = () => forceUpdate({})

  return (
    <>
      <button onClick={onRefresh}>点击强制刷新 --- {Date.now()}</button>
    </>
  )
```

## useRef

useRef 函数返回一个可变的 ref 对象，该对象只有一个 current 属性。可以在调用 useRef 函数时为其指定初始值。并且这个返回的 ref 对象在组件的整个生命周期内保持不变。

- useRef 函数用来解决以下两个问题：

1. 获取 DOM 元素或子组件的实例对象；
2. 存储渲染周期之间共享的数据；

### 使用 useRef 的注意事项

1. 组件 rerender 时 useRef 不会被重复初始化
2. 仅有 ref.current 的值发生改变时，组件不会重新渲染
3. ref.current 不能作为其它 Hooks 的依赖项  
   由于 ref.current 值的变化不会造成组件的 rerender，而且 React 也不会跟踪 ref.current 的变化，因此 ref.current 不可以作为其它 hooks（useMemo、useCallback、useEffect 等） 的依赖项。
   (因为 useEffect 只有组件首次渲染或者其他情况触发了重新渲染会执行，但是 ref.current 的变化不会引起组件的重新渲染执行)

```
const time = useRef(new Date().getTime)

useEffect({
  console.log('time 的值发生了变化：' + time.current)
}, [time.current])

```

当 time.current 发生变化时，并不会触发 useEffect 的重新执行。因此，不能把 ref.current 作为其它 hooks 的依赖项。

### 非 hooks 拓展

1. forwardRef

ref 的作用是获取实例，但由于函数组件不存在实例，因此无法通过 ref 获取函数组件的实例引用。而 React.forwardRef 就是用来解决这个问题的。

React.forwardRef 会创建一个 React 组件，这个组件能够将其接收到的 ref 属性转发到自己的组件树。

组件不会将它们的 DOM 节点暴露给父组件。举例来说，如果你想要 MyInput 的父组件 能访问到 <input> DOM 节点，你必须选择使用 forwardRef。



记录基本使用说明：   

forwardRef返回一个DOM函数组件，方法的参数是一个函数，函数用于创建DOM函数组件，方法有两个参数，第一个参数 ：props（用于接收父组件传递到子组件的props）；
第二个参数： ref(即父组件传递过来的ref值)  


2. useImperativeHandle  

直接使用 ref 获取 DOM 实例，会全面暴露 DOM 实例上的 API，从而导致外部使用 ref 时有更大的自由度。在实际开发中，我们应该严格控制 ref 的暴露颗粒度，控制它能调用的方法，只向外暴露主要的功能函数，其它功能函数不暴露。  

React 官方提供 useImperativeHandle 的目的，就是让你在使用 ref 时可以自定义暴露给外部组件哪些功能函数或属性。  语法结构如下：  

```
useImperativeHandle(通过forwardRef接收到的父组件的ref对象, () => 自定义ref对象, [依赖项数组])
```
其中，第三个参数“依赖项数组”是可选的。  


第三个参数有三种用法：
1. 空数组“[]”, 即第二个参数的方法仅执行一次，如果方法里所依赖的关键数据变化了，该方法也不再执行，仅在初始化时执行一次，提高性能。
2. 有关联的参数的数组项，首次渲染时执行一次，仅关联参数变化时会重新执行第二个参数的方法，提高性能。
3. 不写第三个参数。首次渲染时执行一次，然后任何关联参数变化时，都会执行一次第二个参数方法，降低性能效率。

## useEffect  

* 什么是函数的副作用  

函数的副作用就是函数除了返回值外对外界环境造成的其它影响，即与组件渲染无关的操作（组件渲染是函数组件的主要作用，除此之外都是副作用）。例如获取数据、修改全局变量、更新 DOM 等。  

useEffect 是 React 中的 hooks API。通过 useEffect 可以执行一些副作用操作，例如：请求数据、事件监听等。它的语法格式如下：  

```
useEffect(fn, deps?)
```

* 第一个参数 fn 是一个副作用函数，该函数会在每次渲染完成之后被调用。  

* 第二个参数是可选的依赖项数组，这个数组中的每一项内容都会被用来进行渲染前后的对比。  


  当依赖项发生变化时，会重新执行 fn 副作用函数  
  当依赖项没有任何变化时，则不会执行 fn 副作用函数  

### useEffect执行时机  

1. 如果没有为 useEffect 指定依赖项数组，则 Effect 中的副作用函数，会在函数组件每次渲染完成后执行。  

2. deps 为空数组  

如果为 useEffect 指定了一个空数组 [] 作为 deps 依赖项，则副作用函数只会在组件首次渲染完成后执行唯一的一次。当组件 rerender 的时候不会触发副作用函数的重新执行。  

3. deps 为依赖项数组
如果想有条件地触发副作用函数的重新执行，则需要通过 deps 数组指定依赖项列表。

React 会在组件每次渲染完成后，对比渲染前后的每一个依赖项是否发生了变化，只要任何一个依赖项发生了变化，都会触发副作用函数的重新执行。否则，如果所有依赖项在渲染前后都没有发生变化，则不会触发副作用函数的重新执行。


- tips 不建议把对象作为 useEffect 的依赖项，因为 React 使用 Object.is() 来判断依赖项是否发生变化。



### useEffect使用注意事项

1. 不要在useEffect函数内部修改依赖项的值，这样会造成死循环。  
2. 多个不同作用的副作用应该尽量分开声明，不要全部写在同一个useEffect当中。（不方便维护）  


### useEffect里清理副作用

useEffect 可以返回一个函数，用于清除副作用的回调。语法格式如下：  

```
useEffect(() => {
  // 1. 执行副作用操作
  // 2. 返回一个清理副作用的函数
  return () => { /* 在这里执行自己的清理操作 */ }
}, [依赖项])
```  

* 实际应用场景：1. 如果当前组件中使用了定时器或绑定了事件监听程序，可以在返回的函数中清除定时器或解绑监听程序。2.清除网络请求

- 清理函数触发的时机有两个：
  1. 组件被卸载的时候，会调用
  2. 当 effect 副作用函数被再次执行之前，会先执行清理函数