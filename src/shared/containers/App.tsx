import * as React from "react";
import { Route } from "react-router-dom";
import Calculator from "../components/Calculator";
import './style.scss'
const App: React.FC = () => {
  return (
    <>
      <Route path="hello" element={<Calculator />} />
    </>
  );
};

export default App;
