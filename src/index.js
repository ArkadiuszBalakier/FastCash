import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'

import ErrorPage from './error/error-page';
import './index.css';
import App from './routes/App';
import RootLayout from './routes/RootLayout';
import Transactions from './routes/Transactions';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/transactions',
      element: <Transactions/>
    }
  ]}
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


