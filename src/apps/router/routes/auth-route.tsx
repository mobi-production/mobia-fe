import { RouteObject } from 'react-router-dom'

import SignInPage from '@/pages/auth/sign-in/page'
import SignUpPage from '@/pages/auth/sign-up/page'

const authRoute: RouteObject[] = [
  {
    path: 'sign-in',
    element: <SignInPage />
  },
  {
    path: 'sign-up',
    element: <SignUpPage />
  }
]
export default authRoute
