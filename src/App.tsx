import React from "react";
import "./App.css";
import { FilteredList } from "./components/FilteredList";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <FilteredList />
    </div>
  );
};

export default App;
