import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   }
//  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
