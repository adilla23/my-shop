import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChatAlt2Icon, ChatIcon, ChevronUpIcon } from '@heroicons/react/solid';

import routes from '../../utils/routes';
import CONSTANTS from '../../utils/constants';
import { Navigation } from '../navigation';

export default function Comment() {
  const [Comment, setComment] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${CONSTANTS.APP_URL}${routes.COMMENT}`)
      .then(res => res.status === 200 && res.json())
      .then(
        result => {
          setIsLoaded(true);
          setComment(result);
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
      <>
       
        <ol>
          {Comment.map(({ id, postId, name, body, email }) => (
            <li key={id} className="m-1 mt-1">
              <div className="w-full px-4 pt-2">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                          <span>{email}</span>
                          <ChatAlt2Icon
                            className={`${
                              open ? 'mix-blend-color-burn transform' : ''
                            } h-5 w-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          {name}
                        </Disclosure.Panel>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          {body}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure >
                </div>
              </div>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
