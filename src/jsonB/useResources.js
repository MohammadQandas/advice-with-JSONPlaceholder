import {useState,useEffect} from 'react'
import axios from 'axios'
const useResources =(resourceName)=>{

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
  

    return resources;
}

export default useResources