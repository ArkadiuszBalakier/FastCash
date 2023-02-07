import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import ErrorPage from './error/error-page';

import './index.css';
import App from './routes/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


