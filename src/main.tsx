import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginView from './views/loginView.tsx'
import {store} from './state/store.ts'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
