import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LazyHomePage = lazy(() =>  import('./pages/HomePage/HomePage'));
const LazyPostsPage = lazy(() =>  import('./pages/PostsPage/PostsPage'));
const LazyAlbumsPage = lazy(() =>  import('./pages/AlbumsPage/AlbumsPage'));
const LazyTodoPage = lazy(() =>  import('./pages/TodoPage/TodoPage'));
const LazyCusomLayout = lazy(() =>  import('./components/Layout/Layout'));

const App: FC = () => {
  return (
    <BrowserRouter>
		<Suspense fallback={<div>Loading</div>}>
			<Routes>
        <Route path='/' element={<LazyCusomLayout />}>
          <Route index element={<LazyHomePage />} />
          <Route path='posts' element={<LazyPostsPage />} />
          <Route path='albums' element={<LazyAlbumsPage />} />
          <Route path='todos' element={<LazyTodoPage />} />
        </Route>
      </Routes>
		</Suspense>
   
    </BrowserRouter>
  );
};

export default App;


