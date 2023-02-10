import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'


import './index.css';

import RootLayout from './routes/RootLayout';
import Transactions from './routes/Transactions';
import Loan from './routes/Loan'
import Withdraw from './routes/Withdraw';
import Transfer from './routes/Transfer'


const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
    {
      path: '/transactions',
      element: <Transactions/>
    },
    {
      path: 'loan',
      element: <Loan/>
    },
    {
      path: 'withdraw',
      element: <Withdraw/>
    },
    {
      path: 'transfer',
      element: <Transfer/>
    }
  ]}
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


