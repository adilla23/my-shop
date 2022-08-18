import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import ROUTES from '../../utils/routes';


export const Navigation = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="divide-y divide-slate-100">
      <nav className="py-4 px-6 text-base font-medium">
        <ul className="flex space-x-3">
         
            <li>
              
              <Link
                to={ROUTES.HOME}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ALBUM}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Album
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.FOTO}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Fotos
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.USER}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Usuarios
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.POST}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Post
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.COMMENT}
                className={`block px-3 py-2 rounded-md ${
                  active ? 'bg-gray-600 text-white' : 'bg-slate-50'
                }`}
              >
                Comentarios
              </Link>
            </li>
          
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};
