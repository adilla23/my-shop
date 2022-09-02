import { useEffect, useState } from 'react';

export const useFetch = (uri) => {
 const [comment, setComment] = useState();
 const [error, setError] = useState(null);
 const [isLoaded, setIsLoaded] = useState(false); 

 useEffect(() => {
   fetch(uri)
     .then((res) => res.json())
     .then(
       (result) => {        
         setIsLoaded(true);
         setComment(result);
       },

       (error) => {
         setIsLoaded(true);
         setError(error);
       }
     );
 }, [uri]);

 return { error, isLoaded, comment };
}


