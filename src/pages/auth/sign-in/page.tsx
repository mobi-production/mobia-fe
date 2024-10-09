import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { createSxProps } from '@/core/helper'
import AuthSignInSignUpFormContainer from '@/domains/auth/components/auth-sign-in-sign-up-container'

const schema = z.object({
  email: z.string().email({
    message: '이메일 형식에 맞지 않습니다.'
  }),
  password: z.string().min(1, {
    message: '비밀번호를 입력해 주세요.'
  })
})

type FormValues = z.infer<typeof schema>

const SignInPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(schema)
  })

  const onSubmitSignIn: SubmitHandler<FormValues> = (data) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
      console.log(data)
    })
  }

  return (
    <AuthSignInSignUpFormContainer>
      <Text
        color='green.700'
        fontWeight='bold'
        fontSize='3xl'>
        MOBIA
      </Text>
      <Stack
        as='form'
        onSubmit={handleSubmit(onSubmitSignIn)}
        width='full'
        spacing={7}>
        <Stack spacing={2}>
          <FormControl
            isInvalid={!!errors.email}
            isRequired>
            <Input
              type='email'
              size='lg'
              fontSize='sm'
              focusBorderColor='primary'
              errorBorderColor='red_soft'
              placeholder='이메일 주소를 입력해주세요.'
              {...register('email')}
            />
            <FormErrorMessage
              fontSize='xs'
              color='red_soft'>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors.password}
            isRequired>
            <Input
              type='password'
              size='lg'
              fontSize='sm'
              focusBorderColor='primary'
              errorBorderColor='red_soft'
              placeholder='비밀번호를 입력해주세요.'
              {...register('password')}
            />
            <FormErrorMessage
              fontSize='xs'
              color='red_soft'>
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          type='submit'
          w='full'
          colorScheme='green'
          bg='green_gray'
          fontWeight='semibold'
          sx={styles.button}
          isLoading={isSubmitting}>
          로그인
        </Button>
      </Stack>
      <HStack spacing={4}>
        <Button
          size='xs'
          variant='link'
          colorScheme='black'
          onClick={() => navigate('/auth/sign-up')}>
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
    </AuthSignInSignUpFormContainer>
  )
}

export default SignInPage

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
