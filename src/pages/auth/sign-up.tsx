import {
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { createSxProps } from '@/core/helper'

import AuthFormContainer from './components/auth-form-container'

const SignUpPage = () => {
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
        <Flex
          alignItems='center'
          gap={2}>
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
          <Button
            size='lg'
            fontSize='sm'
            colorScheme='green'
            bg='green_gray'
            fontWeight='semibold'
            sx={styles.button}>
            중복 확인
          </Button>
        </Flex>
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
        회원가입
      </Button>
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
          onClick={() => navigate('/auth')}>
          로그인
        </Button>
      </HStack>
    </AuthFormContainer>
  )
}

export default SignUpPage

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
