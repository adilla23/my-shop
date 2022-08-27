import React, { useEffect, useState } from 'react';
import routes from '../../utils/routes';
import CONSTANTS from '../../utils/constants';

export const Foto=(id)=> {
  const [fotos, setFotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const {albumId}=id;

  useEffect(() => {
    fetch(`${CONSTANTS.APP_URL}${routes.ALBUM}/${albumId}${routes.FOTO}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFotos(result);
        },

        (error) => {
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
       
        <div>
          {fotos.map(({ id, title, url, thumbnailUrl, albumId }) => (
            <div key={id} className="flex items-start space-x-6 p-6">
              <img
                src={url}
                width="60"
                height="88"
                className="flex-none rounded-md bg-slate-100"
                alt="..."
              />
              <div className="min-w-0 relative flex-auto">
                <p className="font-semibold text-slate-900 truncate pr-20">
                  Album: {albumId}
                </p>
                <p className="font-semibold text-slate-900 truncate pr-20">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
