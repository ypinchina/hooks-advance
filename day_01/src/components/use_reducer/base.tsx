import React from "react";
import { useImmerReducer } from "use-immer";

type useType = typeof initState;
const initState = { name: "yip", age: -4.5 };
type actionType =
  | { type: "name"; payload: string }
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };
export const Father: React.FC = () => {
  const actionState = (prevState: useType) => {
    return { ...prevState, age: Math.round(Math.abs(prevState.age)) || 18 };
  };
  const reducer = (oldState: useType, action: actionType) => {
    switch (action.type) {
      case "name":
        oldState.name = action.payload;
        break;
      case "INCREMENT":
        oldState.age += action.payload;
        break;
      case "DECREMENT":
        oldState.age -= action.payload;
        break;
      case "RESET":
        return actionState(initState)
      default:
        return oldState;
    }
  };
  const [state, dispatch] = useImmerReducer(reducer, initState, actionState);
  const changeUseName = () => {
    dispatch({ type: "name", payload: "易 鵬" });
  };
  return (
    <>
      <button onClick={changeUseName}>修改用户名</button>
      <h3>{JSON.stringify(state)}</h3>
      <div className="father">
        <Son1 {...state} dispatch={dispatch}></Son1>
        <Son2 {...state} dispatch={dispatch}></Son2>
      </div>
    </>
  );
};

const Son1: React.FC<useType & { dispatch: React.Dispatch<actionType> }> = (
  props
) => {
  const { dispatch, ...user } = props;
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
const Son2: React.FC<useType & { dispatch: React.Dispatch<actionType> }> = (
  props
) => {
  const { dispatch, ...user } = props;
  const reduce = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  return (
    <div className="son2">
      <p>{JSON.stringify(user)}</p>
      <button onClick={reduce}>reduce age</button>
      <hr></hr>
      <Grandson dispatch={dispatch}></Grandson>
    </div>
  );
};
const Grandson: React.FC<{ dispatch: React.Dispatch<actionType> }> = (
  props
) => {
  const resetState = () => {
    props.dispatch({ type: "RESET" });
  };
  return (
    <>
      <h3>Grandson 组件</h3>
      <button onClick={resetState}>reset</button>
    </>
  );
};
