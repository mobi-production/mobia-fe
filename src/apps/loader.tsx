import { PropsWithChildren, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const RootLoader: React.FC<PropsWithChildren> = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Outlet />
    </Suspense>
  )
}

export default RootLoader
