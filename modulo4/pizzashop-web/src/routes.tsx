import { createBrowserRouter } from 'react-router-dom'

// Import your components here
import { DashboardPage } from '@/pages/app/Dashboard'
import { SignInPage } from '@/pages/auth/SignIn'
import { AppLayout } from '@/pages/layouts/App'
import { AuthLayout } from '@/pages/layouts/Auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <DashboardPage /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignInPage /> }],
  },
])
