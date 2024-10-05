import { Button, Flex, Text } from '@chakra-ui/react'

const LoginPage = () => {
  return (
    <Flex
      align='center'
      justify='center'
      flexDirection='column'
      bg='gray.5'>
      <Button
        colorScheme='green'
        variant='outline'
        bg='green_gray'
        borderRadius='99px'
        padding='16px 36px'
        fontWeight='bold'>
        Login
      </Button>
      <Text
        color='primary'
        fontWeight='500'>
        로그인 페이지
      </Text>
    </Flex>
  )
}

export default LoginPage
