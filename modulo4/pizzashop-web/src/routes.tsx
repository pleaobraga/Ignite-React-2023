import { createBrowserRouter } from 'react-router-dom'

import { Orders } from '@/pages/app/Orders/Orders'
import { SignIn } from '@/pages/auth/SignIn'
import { SignUp } from '@/pages/auth/SignUp'
import { AppLayout } from '@/pages/layouts/App'
import { AuthLayout } from '@/pages/layouts/Auth'

import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/Dashboard/Dashboard'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
