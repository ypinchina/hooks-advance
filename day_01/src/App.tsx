import React from "react";
import { LevelA } from "./components/use_context/base";
import { AppContextWrapper } from "./components/use_context/AppContext";
const App: React.FC = () => {
  return (
    <>
      <AppContextWrapper>
        <LevelA></LevelA>
      </AppContextWrapper>
    </>
  );
};

export default App;
