import React from 'react';

import {Navigation} from '../navigation';
import CONSTANTS from '../../utils/constants';
import routes from '../../utils/routes';
import { Foto } from '../photo';
import { useFetch } from '../../hooks/useFetch';

export const Album=()=> {
   const url = `${CONSTANTS.APP_URL}${routes.ALBUM}`; 
   const { isLoaded, error, comment } = useFetch(url); 
  
    return (
      <>
        {error && <div>Error: {error.message}</div>}
        {!error && !isLoaded && <div>Loading...</div>}
        {!error && isLoaded && (          
      <div>
        <Navigation />
        <ol className="divide-y divide-slate-50">
          {comment.map(({ id, title }) => (
            <li className="items-start space-x-6 p-6" key={id}>
              <div>
                <div className="font-semibold text-slate-900 truncate pr-10">
                  Album:{id}
                </div>
                <div className="font-semibold text-slate-500 truncate pr-10">
                  {title}
                </div>
              </div>

              <div>
                <Foto albumId={id}></Foto>
              </div>
            </li>
          ))}
        </ol>
      </div>
        )}
      </>
    );
    }
    
