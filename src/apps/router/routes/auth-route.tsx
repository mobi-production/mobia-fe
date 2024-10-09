import { RouteObject } from 'react-router-dom'

import SignInPage from '@/pages/auth/sign-in'
import SignUpPage from '@/pages/auth/sign-up'

const authRoute: RouteObject[] = [
  {
    index: true,
    element: <SignInPage />
  },
  {
    path: 'sign-up',
    element: <SignUpPage />
  }
]
export default authRoute
