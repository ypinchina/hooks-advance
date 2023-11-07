import React, { useState } from "react";
type ContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export const AppContext = React.createContext<ContextType>({} as ContextType);
export const AppContextWrapper: React.FC<React.PropsWithChildren> = (props) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <AppContext.Provider value={{ count, setCount }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};
