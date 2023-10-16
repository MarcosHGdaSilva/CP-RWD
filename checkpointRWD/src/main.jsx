import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ModeloCarro from './routes/ModeloCarro/Modelo.jsx'
import Pecas from './routes/Pecas/Pecas.jsx'
import QuemSomos from './routes/QuemSomos/QuemSomos.jsx'
import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Erro.jsx'
import Login from './routes/TelaLogin/TelaLogin.jsx'
import Cadastro from './routes/Cadastro/Cadastro.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/ModeloCarro',
        element: <ModeloCarro /> 
      },
      {
        path: '/QuemSomos',
        element: <QuemSomos /> 
      },
      {
        path: '/Pecas',
        element: <Pecas /> 
      },
      {
        path: '/Login',
        element: <Login /> 
      },
      {
        path: '/Cadastro',
        element: <Cadastro /> 
      }
      ]
    }
 ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
