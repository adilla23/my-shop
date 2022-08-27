import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import {ChevronUpIcon } from '@heroicons/react/solid';

import routes from '../../utils/routes';
import CONSTANTS from '../../utils/constants';
import { Navigation } from '../navigation';
import { Comment } from '../comment';

export const Post=()=> {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
    fetch(`${CONSTANTS.APP_URL}${routes.POST}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setPost(result);
        },

        error => {
          setIsLoaded(true);

          setError(error);
        }
      );
  }, []);

  
    return (
      <>
        {error && <div>Error: {error.message}</div>}
        {!error && !isLoaded && <div>Loading...</div>}
        {!error && isLoaded && (
          <>
            <Navigation />
            <ol>
              {post.map(({ id, userId, title, body }) => (
                <li key={id} className="m-1 mt-1">
                  <div className="w-full px-4 pt-2">
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                              <span>{title}</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-gray-500`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              {body}

                              <Comment postId={id}></Comment>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </>
        )}
      </>
    );
      }
  

