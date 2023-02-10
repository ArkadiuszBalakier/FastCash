import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'


import './index.css';

import RootLayout from './routes/RootLayout';
import Transactions from './routes/Transactions';
import Deposit from './routes/Deposit'
import Withdraw from './routes/Withdraw';



const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
    {
      path: '/transactions',
      element: <Transactions/>
    },
    {
      path: 'deposit',
      element: <Deposit/>
    },
    {
      path: 'withdraw',
      element: <Withdraw/>
    }
  ]}
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


