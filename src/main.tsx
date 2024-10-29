import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from './routes.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RouterProvider />
  </BrowserRouter>
);
