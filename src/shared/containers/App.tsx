import * as React from "react";
import { Route } from "react-router-dom";
import { Hello } from "../components";

const App: React.FC = () => {
  return (
    <>
      <Route path="hello" element={<Hello />} />
    </>
  );
};

export default App;
