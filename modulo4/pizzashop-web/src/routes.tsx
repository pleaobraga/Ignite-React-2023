import { createBrowserRouter } from 'react-router-dom'

// Import your components here
import { SignIn } from '@/pages/auth/SignIn'
import { AppLayout } from '@/pages/layouts/App'
import { AuthLayout } from '@/pages/layouts/Auth'
import { SignUp } from '@/pages/auth/SignUp'
import { Orders } from '@/pages/app/Orders/Orders'
import { Dashboard } from './pages/app/Dashboard/Dashboard'
import { NotFound } from './pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
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
])
