import React, { useContext } from "react";
import { AppContext } from './AppContextReducer'

export const Father: React.FC = () => {
  const { user, dispatch } = useContext(AppContext)
  const changeUseName = () => {
    dispatch({ type: "name", payload: "易 鵬" });
  };
  return (
    <>
      <button onClick={changeUseName}>修改用户名</button>
      <h3>{JSON.stringify(user)}</h3>
      <div className="father">
        <Son1></Son1>
        <Son2></Son2>
      </div>
    </>
  );
};

const Son1: React.FC = () => {
  const { user, dispatch } = useContext(AppContext)
  const add = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  return (
    <div className="son1">
      <p>{JSON.stringify(user)}</p>
      <button onClick={add}>add age</button>
    </div>
  );
};
const Son2: React.FC = () => {
  const { user, dispatch } = useContext(AppContext)
  const reduce = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  return (
    <div className="son2">
      <p>{JSON.stringify(user)}</p>
      <button onClick={reduce}>reduce age</button>
      <hr></hr>
      <Grandson></Grandson>
    </div>
  );
};
const Grandson: React.FC = () => {
  const { dispatch } = useContext(AppContext)
  const resetState = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h3>Grandson 组件</h3>
      <button onClick={resetState}>reset</button>
    </>
  );
};
