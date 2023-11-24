import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginView from './views/loginView.tsx'
import './index.css'
import {store} from './state/store.ts'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

 let changeBackgroundStyle = () => {
  document.getElementsByTagName("body").style.background-image = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: < LoginView onClick = {()=>()} />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
)
