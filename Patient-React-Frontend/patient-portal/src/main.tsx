import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DashMain from './pages/dashboard-pages/dash-main.tsx'
import ReportPage from './pages/dashboard-pages/dash-report.tsx'
import SettingsPage from './pages/dashboard-pages/dash-settings.tsx'


// Below handles all of the browser routing in the URL.
// 
// In other words: this is what loads all the different pages of the website
// when a user travels to its respective URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // if the user travels to a URL path NOT specified in this BrowserRouter, then we display an error page
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <Dashboard />, // --> <Dashboard/> is the main TEMPLATE component. Basically it has
    // the <Navbar/> and leaves open space for the different pages of the 
    // application (ex: DashMain, Reports, Settings...)
    // 
    // You'll notice in Dashboard.tsx there's an <Outlet/> tag, that is
    // where the following children pages below are loaded into:
    children: [
      {
        element: <DashMain />,
        index: true        // 'index' means that when you travel to '/dashboard', then it defaults
        // to adding <DashMain/> into the 'dashboard-content' <div> by use of
        // the <Outlet/> tag
      },
      {
        path: 'report',    // not the index element, so to load new content in the dashboard we need
        // to give it the new path 'report' (in practice this becomes '/dashboard/report')
        element: <ReportPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
