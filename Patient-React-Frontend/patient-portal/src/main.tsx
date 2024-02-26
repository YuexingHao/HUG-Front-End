import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DashMain from './pages/dashboard-pages/dash-main.tsx'
import ReportPage from './pages/dashboard-pages/dash-report.tsx'
import SettingsPage from './pages/dashboard-pages/dash-settings.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children: [
      {
        element: <DashMain/>,
        index: true
      },
      {
        path: 'report',
        element: <ReportPage/>
      },
      {
        path: 'settings',
        element: <SettingsPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
