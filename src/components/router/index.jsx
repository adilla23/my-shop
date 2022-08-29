import React from 'react';
import { BrowserRouter, Routes, Route, createRoutesFromChildren } from 'react-router-dom';
import {Album} from '../album';
import {Foto }from '../photo';
import {Home} from '../home';
import {User}from '../user';
import {Post} from '../post';
import {Comment} from '../comment';

import ROUTES from '../../utils/routes';
import Auth from '../../auth/loguin';


export const Router = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ALBUM} element={<Album />} />
          <Route path={ROUTES.FOTO} element={<Foto />} />
          <Route path={ROUTES.POST} element={<Post />} />
          <Route path={ROUTES.COMMENT} element={<Comment />} />
          <Route path={ROUTES.USER} element={<User />} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
