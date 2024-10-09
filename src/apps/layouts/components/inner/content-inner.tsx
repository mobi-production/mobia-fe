import { Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const ContentInner: React.FC<PropsWithChildren> = ({ children }) => {
  return <Stack flex={1}>{children}</Stack>
}
export default ContentInner
