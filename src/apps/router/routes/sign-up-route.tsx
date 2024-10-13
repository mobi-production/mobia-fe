import { RouteObject } from 'react-router-dom'

import SignUpPage from '@/pages/auth/sign-up/page'

const signUpRoute: RouteObject[] = [
  {
    index: true,
    element: <SignUpPage />
  }
]
export default signUpRoute
