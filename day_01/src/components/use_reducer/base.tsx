import React, { useReducer } from "react";
type useType = typeof initState;
const initState = { name: "yip", age: 0 };
export const Father: React.FC = () => {
  type actionType = { type: "name"; payload: string };

  const actionState = (initState: useType) => {
    return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 };
  };
  const reducer = (oldState: useType, action: actionType) => {
    switch (action.type) {
      case "name":
        return { ...oldState, name: action.payload };
      default:
        return oldState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState, actionState);
  const changeUseName = () => {
    dispatch({ type: "name", payload: "易 鵬" });
  };
  return (
    <>
      <button onClick={changeUseName}>修改用户名</button>
      <h3>{JSON.stringify(state)}</h3>
      <div className="father">
        <Son1 {...state}></Son1>
        <Son2 {...state}></Son2>
      </div>
    </>
  );
};

const Son1: React.FC<useType> = (props) => {
  return (
    <div className="son1">
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};
const Son2: React.FC<useType> = (props) => {
  return (
    <div className="son2">
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};
