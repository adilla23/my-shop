import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Album} from '../album';
import {Foto }from '../photo';
import {Home} from '../home';
import {User}from '../user';
import {Post} from '../post';
import {Comment} from '../comment';
import ROUTES from '../../utils/routes';
import Auth from '../../auth/loguin';
import { UserContext } from '../../auth/authContext';
import { Logauth } from '../../auth/logauth';

export const Router = () => {
  

  const { isLoggin, setLoggin } = React.useContext(UserContext);
 
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {!isLoggin ? (
              <>
                <Route path={ROUTES.AUTH} element={<Auth />} />
                <Route path="*" element={<Auth />} />
              </>
            ) : (
              <>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ALBUM} element={<Album />} />
                <Route path={ROUTES.FOTO} element={<Foto />} />
                <Route path={ROUTES.POST} element={<Post />} />
                <Route path={ROUTES.COMMENT} element={<Comment />} />
                <Route path={ROUTES.USER} element={<User />} />
                <Route path={ROUTES.LOGAUTH} element={<Logauth />} />
                <Route path="*" element={<Home />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
