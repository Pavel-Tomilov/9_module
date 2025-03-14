import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CusomLayout from './components/Layout/Layout';
import PostsPage from './pages/PostsPage/PostsPage';
import AlbumsPage from './pages/AlbumsPage/AlbumsPage';
import TodoPage from './pages/TodoPage/TodoPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CusomLayout />}>
          <Route index path='posts' element={<PostsPage />} />
          <Route path='albums' element={<AlbumsPage />} />
          <Route path='todos' element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
