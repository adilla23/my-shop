import React from 'react';

import routes from '../../utils/routes';
import CONSTANTS from '../../utils/constants';
import { Navigation } from '../navigation'
import { useFetch } from '../../hooks/useFetch';


export const User = () => {
  const url = `${CONSTANTS.APP_URL}${routes.USER}`;
  const { isLoaded, error, comment } = useFetch(url);

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {!error && !isLoaded && <div>Loading...</div>}
      {!error && isLoaded && (
        <>
          <Navigation />
          <ol>
            {comment.map(({id, name, username, email,address, phone, website,company}) => (
                <li key={id} className="m-12 mt-12">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {username}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Datos Personales.
                      </p>
                    </div>
                    <div className="border-t border-gray-200">
                      <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Nombre y Apellidos
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {name}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Dirección
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {`calle  ${address.street} apartamento ${address.suite}, ${address.city}`}
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {email}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Teléfono
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {phone}
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Compañía
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {company.name}
                          </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Website
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {website}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </li>
              )
            )}
          </ol>
        </>
      )}
    </>
  );
};