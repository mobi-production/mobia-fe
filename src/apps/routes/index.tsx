import * as Sentry from '@sentry/react'
import { createBrowserRouter } from 'react-router-dom'

import LoginPage from '@/pages/auth/login'

import MBALayOut from '../layout'
import RootErrorBoundary from './components/route-error-boundary'

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter)

export const router = sentryCreateBrowserRouter([
  {
    element: <MBALayOut />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: '/',
        element: <div>메인 페이지</div>
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
])
