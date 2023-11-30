import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginView from './views/loginView.tsx'
import CreateAccountView from './views/createAccountView.tsx'
import ResetPasswordView from './views/resetPasswordView.tsx'
import DashboardView from './views/dashboardView.tsx'
import {store} from './state/store.ts'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './i18n';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <App/>
  },
  {
    path: "/login",
    element: < LoginView />
  },
  {
    path: "/createAccount",
    element: < CreateAccountView />
  },
  {
    path: "/resetPassword",
    element: < ResetPasswordView />
  },
  {
    path: "/dashboard",
    element: < DashboardView />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
