import { Container, Flex, VStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const AuthFormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxW='md'
      py={12}
      border='1px'
      borderColor='gray.4'>
      <Flex
        align='center'
        justify='center'
        direction='column'>
        <VStack
          width='full'
          maxW='320px'
          spacing={6}>
          {children}
        </VStack>
      </Flex>
    </Container>
  )
}

export default AuthFormContainer
