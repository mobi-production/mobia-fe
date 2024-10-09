import { PropsWithChildren } from 'react'

import ContentInner from '../components/inner/content-inner'
import RootInner from '../components/inner/root-inner'
import MBAGnb from '../components/navigation/gnb'

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootInner>
      <MBAGnb />
      <ContentInner>{children}</ContentInner>
    </RootInner>
  )
}
export default RootLayout
