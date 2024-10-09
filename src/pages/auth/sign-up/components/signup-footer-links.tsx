import { Button, HStack, Spacer, Text } from '@chakra-ui/react'
import { NavigateFunction } from 'react-router-dom'

type Props = {
  navigate: NavigateFunction
}

const SignUpFooterLinks: React.FC<Props> = ({ navigate }) => {
  return (
    <HStack
      w='full'
      spacing={4}>
      <Text
        fontSize='xs'
        color='black'>
        이미 회원이신가요?
      </Text>
      <Spacer />
      <Button
        size='xs'
        variant='link'
        colorScheme='black'
        onClick={() => navigate('/auth/sign-in')}>
        로그인
      </Button>
    </HStack>
  )
}

export default SignUpFooterLinks
