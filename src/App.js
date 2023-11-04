import "./store";

import NavBarMUI from "./NavBarMUI";

import "./App.css";

function App() {

  return (
    <>
      <div className="main">
        <NavBarMUI />
        <h5 className="bottom-right">How are you today?</h5> 
        <h5 className="bottom-left">Rate Us</h5>
      </div>
    </>
  );
}

export default App;
