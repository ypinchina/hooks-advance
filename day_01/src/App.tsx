import React from "react";
import { AppContextReducerWrapper } from './components/use_reducer/AppContextReducer'
import { Father } from "./components/use_reducer/context_reducer";
const App: React.FC = () => {
  return (
    <>
      <AppContextReducerWrapper>
        <Father></Father>
      </AppContextReducerWrapper>
    </>
  );
};

export default App;
