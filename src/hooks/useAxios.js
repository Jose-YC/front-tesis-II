import { useEffect, useState } from "react";

export const useAxios = () => {
    const [loading, setLoading] = useState(false);
    let controller = new AbortController();
  
    const callEndpoint = async (axios, controllers) => {
      if (controller) controller = controllers;
      setLoading(true);
      let result = {} ;
      try {
        result = await axios;
        // console.log(result);
      } catch (err) {
        setLoading(false);
        console.log(err);
        // throw err;
      }
      setLoading(false);
      return result;
    };
  
    const cancelEndpoint = () => {
      setLoading(false);
      controller && controller.abort();
    };
  
    useEffect(() => {
      return () => {
        cancelEndpoint();
      };
    }, []);
  
    return { loading, callEndpoint };
}
