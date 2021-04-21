import React, { useEffect, useState } from "react";
import axios from "axios";

const APIRequest = ({ resourceName }) => {

  const [resources, setResources] = useState([]);
  const fetch = async (resourceName) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );
    setResources(response.data);
  };
  useEffect(() => {
    fetch(resourceName);
  }, [resourceName]);

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
