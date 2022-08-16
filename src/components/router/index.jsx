import React from 'react';
import { BrowserRouter, Routes, Route, createRoutesFromChildren } from 'react-router-dom';
import Album from '../album';
import Foto from '../photo';
import Home from '../home';
import User from '../user';
import Post from '../post';
import Comment from '../comment';
import routes from '../../utils/routes';


export default function Router() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.ALBUM} element={<Album />} />
          <Route path={routes.FOTO} element={<Foto />} />
          <Route path={routes.POST} element={<Post />} />
          <Route path={routes.COMMENT} element={<Comment />} />
          <Route path={routes.USER} element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
