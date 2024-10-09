import { Button } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import { useNavigate, useRouteError } from 'react-router-dom'

import { useEventEffect } from '@/core/hooks'

const RootError = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  useEventEffect(() => {
    Sentry.captureException(error)
  })

  return (
    <div>
      <h1>오류가 발생했습니다.</h1>
      <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </div>
  )
}

export default RootError
