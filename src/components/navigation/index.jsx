import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

import ROUTES from '../../utils/routes';


export const Navigation = () => {  
  
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
                  to={ROUTES.POST}
                  className={({ isActive }) =>
                    isActive
                      ? 'block px-3 py-2 rounded-md bg-gray-600 text-white'
                      : 'block px-3 py-2 rounded-md bg-slate-50'
                  }
                >
                  Post
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
              Loggin
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </nav>
    </div>
  );
};
