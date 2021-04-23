import React from "react";
import Advice from "./adviceSection/Advice";

const App = () => {
  return (
    <div >
      <div
        style={{ marginLeft: "43%", color: "steelblue", fontSize: "45px" ,paddingTop:"40px",fontStyle:'oblique'}} >
            Advice API
      </div>
    
      <Advice/>
     
    </div>
  );
};
export default App;
