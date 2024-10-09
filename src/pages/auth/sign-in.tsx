import {
  Button,
  FormControl,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { createSxProps } from '@/core/helper'

import AuthFormContainer from './components/auth-form-container'

const SignInPage = () => {
  const navigate = useNavigate()
  return (
    <AuthFormContainer>
      <Text
        color='green.700'
        fontWeight='bold'
        fontSize='3xl'>
        MOBIA
      </Text>
      <Stack
        width='full'
        spacing={2}>
        <FormControl isRequired>
          <Input
            type='email'
            size='lg'
            fontSize='sm'
            focusBorderColor='primary'
            errorBorderColor='red_soft'
            placeholder='이메일 주소를 입력해주세요.'
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type='password'
            size='lg'
            fontSize='sm'
            focusBorderColor='primary'
            errorBorderColor='red_soft'
            placeholder='비밀번호를 입력해주세요.'
          />
        </FormControl>
      </Stack>
      <Button
        type='submit'
        w='100%'
        colorScheme='green'
        bg='green_gray'
        fontWeight='semibold'
        sx={styles.button}>
        로그인
      </Button>
      <HStack spacing={4}>
        <Button
          size='xs'
          variant='link'
          colorScheme='black'
          onClick={() => navigate('sign-up')}>
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
    </AuthFormContainer>
  )
}

export default SignInPage

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
