import React from "react";

function App() {
  const [test, setTest] = React.useState("");

  const HandleChange = (event) => {
    setTest(event.target.value);
  };

  return (
    <div>
      <h1>hello from react</h1>
      <input type="text" value={test} onChange={HandleChange} />
    </div>
  );
}

export default App;
