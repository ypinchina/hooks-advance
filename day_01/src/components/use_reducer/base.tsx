import React, { useReducer } from "react";

export const Father: React.FC = () => {
  type useType = typeof initState
  const initState = { name: 'yip', age: 0 }
  const actionState = (initState: useType) => {
    return { ...initState, age: Math.round(Math.abs(initState.age)) || 18 }
  }
  const reducer = (oldState: useType, action) => {
    switch(action.type) {
      case 'name': 
        return {...oldState, name: action.payload }
      default:
        return oldState
    }
  }
  const [state, dispatch] = useReducer(reducer, initState, actionState);
  const changeUseName = () => {
    dispatch({ type: 'name', payload: '易鹏'})
  }
  return (
    <>
      <button onClick={changeUseName}>修改用户名</button>
      <h3>{JSON.stringify(state)}</h3>
      <div className="father">
        <Son1></Son1>
        <Son2></Son2>
      </div>
    </>
  );
};

const Son1: React.FC = () => {
  return <div className="son1"></div>;
};
const Son2: React.FC = () => {
  return <div className="son2"></div>;
};
