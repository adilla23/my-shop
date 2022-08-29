import React, { useEffect, useState } from 'react';
import routes from '../../utils/routes';
import CONSTANTS from '../../utils/constants';
import { useFetch } from '../../hooks/useFetch';

export const Foto=(id)=> {
  
  
  const {albumId}=id;
  const url = `${CONSTANTS.APP_URL}${routes.ALBUM}/${albumId}${routes.FOTO}`;
  const { isLoaded, error, comment } = useFetch(url); 

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {!error && !isLoaded && <div>Loading...</div>}
      {!error && isLoaded && (

      <div>
       
        <div>
          {comment.map(({ id, title, url, thumbnailUrl, albumId }) => (
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
      )}
      </>
    );
  }

