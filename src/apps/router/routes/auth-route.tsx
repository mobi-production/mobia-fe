import { RouteObject } from 'react-router-dom'

import SignInPage from '@/pages/auth/sign-in/page'

const authRoute: RouteObject[] = [
  {
    index: true,
    element: <SignInPage />
  }
]
export default authRoute
