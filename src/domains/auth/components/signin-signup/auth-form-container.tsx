import { Center, Container, VStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const AuthFormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxW='md'
      py={12}
      border='1px'
      borderColor='gray.4'>
      <Center>
        <VStack
          width='full'
          maxW='320px'
          spacing={6}>
          {children}
        </VStack>
      </Center>
    </Container>
  )
}

export default AuthFormContainer
