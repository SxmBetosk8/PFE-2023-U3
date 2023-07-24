import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tareas from './components/tareas/Tareas'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/Tareas",
    element: <Tareas />,

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)