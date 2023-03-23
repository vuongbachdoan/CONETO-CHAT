import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { router } from './router';

import './index.css';
import './Shared/Styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <RouterProvider router={router}/>
    </Authenticator.Provider>
  </React.StrictMode>
);
