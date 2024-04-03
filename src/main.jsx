import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CreateNewsFeed from './pages/CreateNewsFeed.jsx'
import ManageNewsFeed from './pages/ManageNewsFeed.jsx'
import PerformanceReport from './pages/PerformanceReport.jsx'
import DetailFeed from './pages/DetailFeed.jsx'
import InputNews from './components/InputNews.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:  [
      { path: "", element: <Dashboard /> },
      { path: "/createnewsfeed", element: <CreateNewsFeed/> },
      { path:"/managenewsfeed", element: <ManageNewsFeed/> },
      {path: "/detailfeed/:id", element: <DetailFeed />},
      { path:'/performancereport', element: <PerformanceReport/>},
      {path: '/inputnews', element: <InputNews/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
