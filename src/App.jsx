import React from "react";
import Countdown from "./utils/Countdown";

const App = () => {
  let deadline = "January, 10, 2030";

  return (
    <div className="App">
      <Countdown deadline={deadline} />
    </div>
  );
};

export default App;