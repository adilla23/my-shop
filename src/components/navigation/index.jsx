import React, { useState } from 'react';

import { Outlet, Link, useLinkClickHandler,NavLink } from 'react-router-dom';

import ROUTES from '../../utils/routes';


export const Navigation = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="divide-y divide-slate-100">
      <nav className="py-4 px-6 text-base font-medium">
        <ul className="flex space-x-3">
          <li>
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.ALBUM}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Album
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.FOTO}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Fotos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.USER}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Usuarios
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to={ROUTES.COMMENT}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Comentarios
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.AUTH}
              className={({ isActive }) =>
                isActive
                  ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                  : 'block px-3 py-2 rounded-md bg-slate-50'
              }
            >
              Loguin
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </nav>
    </div>
  );
};
