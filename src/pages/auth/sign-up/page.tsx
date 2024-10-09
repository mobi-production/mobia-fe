import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Spacer,
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
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$/, {
      message:
        '비밀번호는 10자 이상, 대소문자, 숫자, 특수문자를 조합해야 합니다.'
    })
})

type FormValues = z.infer<typeof schema>

const SignUpPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(schema)
  })

  const onClickEmailDuplicateCheck = () => {
    const email = getValues('email')
    console.log('email', email)
  }

  const onSubmitSignUp: SubmitHandler<FormValues> = (data) => {
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
        onSubmit={handleSubmit(onSubmitSignUp)}
        width='full'
        spacing={7}>
        <Stack spacing={2}>
          <Flex gap={2}>
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
            <Button
              size='lg'
              fontSize='sm'
              colorScheme='green'
              bg='green_gray'
              fontWeight='semibold'
              sx={styles.button}
              onClick={onClickEmailDuplicateCheck}>
              중복 확인
            </Button>
          </Flex>
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
          w='100%'
          colorScheme='green'
          bg='green_gray'
          fontWeight='semibold'
          sx={styles.button}
          isLoading={isSubmitting}>
          회원가입
        </Button>
      </Stack>
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
    </AuthSignInSignUpFormContainer>
  )
}

export default SignUpPage

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
