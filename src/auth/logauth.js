import React, { useContext } from 'react'
import { Navigation } from '../components/navigation';
import { UserContext } from './authContext';

export const Logauth = () => {
  const {setLoggin } = useContext(UserContext);
  
  const handleLogauth = (event)=>{
    event.preventDefault();  
    setLoggin(false);
  };

  return (
    <>
      <Navigation />
      <p className="ml-10 font-medium">
        Este es un logauth sencillo{' '}
      </p>
      <button
        onClick={handleLogauth}
        className="mt-5 ml-10 bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Logauth
      </button>
    </>
  );
}
