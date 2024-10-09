import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'

import RootError from '../error'
import RootLayout from '../layouts/templates/root-layout'
import RootLoader from '../loader'
import { createMergeRoute } from './helpers'
import authRoute from './routes/auth-route'

const defaultRoutes: RouteObject = {
  element: (
    <RootLayout>
      <RootLoader />
    </RootLayout>
  ),
  errorElement: <RootError />,
  children: [
    {
      index: true,
      element: <Navigate to='/auth' />
    }
  ]
}

const mergeRoute = createMergeRoute(defaultRoutes)

export const router = createBrowserRouter(
  mergeRoute({
    auth: authRoute
  })
)
