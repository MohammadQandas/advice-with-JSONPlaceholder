import React from "react";
import useResources from "./useResources";

const APIRequest = ({ resourceName }) => {
  const resources = useResources(resourceName);

  return (
    <div>
      <ul>
        {resources.map((res) => (
          <li key={res.id}> {res.title} </li>
        ))}
      </ul>



      
    </div>
  );
};

export default APIRequest;
