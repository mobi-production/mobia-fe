import { RouteObject } from 'react-router-dom'

import LoginPage from '@/pages/auth/login'

const authRoute: RouteObject[] = [
  {
    index: true,
    element: <LoginPage />
  }
]
export default authRoute
