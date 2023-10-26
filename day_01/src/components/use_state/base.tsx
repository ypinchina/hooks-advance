import React, { useState, useEffect } from "react";
export const Count: React.FC = () => {
  console.log("函数执行了");
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <h1>Count的值是: {count}</h1>
      <button onClick={add}>+1</button>
    </>
  );
};
export const DateCom: React.FC = () => {
  const [date] = useState(() => {
    const dt = new Date();
    return {
      year: dt.getFullYear(),
      month: dt.getMonth() + 1,
      day: dt.getDate(),
    };
  });
  return (
    <>
      <h1>日期格式是: </h1>
      <div>
        <div>年: {date.year}</div>
        <div>月: {date.month}</div>
        <div>日: {date.day}</div>
      </div>
    </>
  );
};
export const UserInfo: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "yip",
    age: 20,
    gender: "male",
  });
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
  return (
    <>
      <h1>个人信息</h1>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={changeUserInfo}>修改个人信息</button>
    </>
  );
};
