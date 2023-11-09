import React from "react";
import { useImmerReducer } from "use-immer";
type UserType = {
  name: string;
  age: number;
}; 
type UserContextType = { user: UserType; dispatch: React.Dispatch<actionType> }

type actionType =
  | { type: "name"; payload: string }
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };
export const AppContext = React.createContext(
  {} as UserContextType
);
export const AppContextReducerWrapper: React.FC<React.PropsWithChildren> = (
  props
) => {
  const user = { name: "yip", age: -6.5 };
  const actionState = (prevState: UserType) => {
    return { ...prevState, age: Math.round(Math.abs(prevState.age)) || 18 };
  };
  const reducer = (oldState: UserType, action: actionType) => {
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
        return actionState(user);
      default:
        return oldState;
    }
  };
  const [state, dispatch] = useImmerReducer(reducer, user, actionState);
  return (
    <>
      <AppContext.Provider value={{ user: state, dispatch }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};
