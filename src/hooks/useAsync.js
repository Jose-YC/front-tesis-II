import { useEffect } from "react";
import { useNotification } from "./useNotification";

export const useAsync = (
    asyncFn = async() => {},
    successFunction= () => {},
    returnFunction= () => {},
    dependencies = [],
    validateFunction = () => {},
) => {
    const { AddNotification } = useNotification();
    useEffect(() => {
        if (validateFunction && !validateFunction()) {return;}
        let isActive = true;
        asyncFn().then((result) => {
          if (isActive) successFunction(result);
        })
        .catch((error) => {
          console.log(error)
            if (isActive) AddNotification({type: 'error', message: error.message, duration: 10000});
        });
        return () => {
          returnFunction && returnFunction();
          isActive = false;
        };
      }, dependencies);
}
