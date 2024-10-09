import { HStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const RootInner: React.FC<PropsWithChildren> = ({ children }) => {
  return <HStack height={'100dvh'}>{children}</HStack>
}
export default RootInner
