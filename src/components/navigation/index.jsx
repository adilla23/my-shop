import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';
import routes from '../../utils/routes';


export const Navigation = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="divide-y divide-slate-100">
      <nav className="py-4 px-6 text-base font-medium">
        <ul className="flex space-x-3">
          <li>
            <Link
              to={routes.HOME}
              className={`block px-3 py-2 rounded-md ${
                active ? 'bg-gray-600 text-white' : 'bg-slate-50'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={routes.ALBUM}
              className={`block px-3 py-2 rounded-md ${
                active ? 'bg-gray-600 text-white' : 'bg-slate-50'
              }`}
            >
              Album
            </Link>
          </li>
          <li>
            <Link
              to={routes.FOTO}
              className={`block px-3 py-2 rounded-md ${
                active ? 'bg-gray-600 text-white' : 'bg-slate-50'
              }`}
            >
              Fotos
            </Link>
          </li>
          <li>
            <Link
              to={routes.USER}
              className={`block px-3 py-2 rounded-md ${
                active ? 'bg-gray-600 text-white' : 'bg-slate-50'
              }`}
            >
              Usuarios
            </Link>
          </li>
          <li>
            <Link
              to={routes.POST}
              className={`block px-3 py-2 rounded-md ${
                active ? 'bg-gray-600 text-white' : 'bg-slate-50'
              }`}
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              to={routes.COMMENT}
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
