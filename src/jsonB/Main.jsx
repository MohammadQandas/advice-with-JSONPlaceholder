import React, { useState } from "react";
import APIRequest from "./APIRequest";
const Main = () => {
  const [resourceName, setResourceName] = useState("todos");

  return (
    <div>
      <button onClick={() => setResourceName("todos")}>todos</button>
      <button onClick={() => setResourceName("posts")}>posts</button>
      <div>
        <APIRequest resourceName={resourceName} />
      </div>
    </div>
  );
};
export default Main;
