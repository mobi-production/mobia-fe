import { Button, HStack, Text } from '@chakra-ui/react'
import { NavigateFunction } from 'react-router-dom'

type Props = {
  navigate: NavigateFunction
}

const SignInFooterLinks: React.FC<Props> = ({ navigate }) => {
  return (
    <HStack spacing={4}>
      <Button
        size='xs'
        variant='link'
        colorScheme='black'
        onClick={() => navigate('/sign-up')}>
        회원가입 하기
      </Button>
      <Text
        color='gray.3'
        fontSize='xs'>
        |
      </Text>
      <Button
        size='xs'
        variant='link'
        colorScheme='black'>
        비밀번호 찾기
      </Button>
    </HStack>
  )
}

export default SignInFooterLinks
