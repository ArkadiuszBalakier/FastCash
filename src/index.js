import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'


import './index.css';

import RootLayout from './routes/RootLayout';
import Transactions from './routes/Transactions';





const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
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


