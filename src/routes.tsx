import { Routes, Route } from 'react-router-dom';
import App from './App';
import { UserDetail } from './components/UserDetail';
import { NotFound } from './components/NotFound';

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='user/:id' element={<UserDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
