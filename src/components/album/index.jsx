import React, { useEffect, useState } from 'react';
import {Navigation} from '../navigation';
import CONSTANTS from '../../utils/constants';
import routes from '../../utils/routes';

export const Album=()=> {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
  
      fetch(`${CONSTANTS.APP_URL}${routes.ALBUM}`)
        .then(res => res.json())
        .then(
          result => {
            setIsLoaded(true);
            setAlbums(result);
          },

          error => {
            setIsLoaded(true);
            setError(error);
          }
        );
    
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Navigation />
        <ol className="divide-y divide-slate-100">
          {albums.map(({ id, title }) => (
            <li className="flex items-start space-x-6 p-6" key={id}>
              <div className="font-semibold text-slate-900 truncate pr-10">
                Album:{id}
              </div>
              <div className="font-semibold text-slate-500 truncate pr-10">
                {title}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
