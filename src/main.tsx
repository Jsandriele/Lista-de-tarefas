import App from './App.tsx';
import './index.css';
import  React  from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import  ReactDOM  from 'react-dom/client'
import Home from './Pages/Home.tsx';
import Dashbord from './Pages/Dashbord.tsx';
import Register from './Pages/Register.tsx';
import ForgotPassword from './Pages/config/ForgotPassword.tsx';
import ErrorPages from './Pages/Err/ErrorPages.tsx';


const router =createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPages/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'dashbord',
        element: <Dashbord/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'forgot',
        element: <ForgotPassword/>
      },
     
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
