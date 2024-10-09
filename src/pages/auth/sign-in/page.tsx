import { Stack, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import AuthFormContainer from '@/domains/auth/components/auth-form-container'
import AuthInputField from '@/domains/auth/components/auth-input-field'
import AuthSubmitButton from '@/domains/auth/components/auth-submit-buttom'
import { signInSchema } from '@/domains/auth/constants/validate/schema'

import SignInFooterLinks from './components/signin-footer-links'

type FormValues = z.infer<typeof signInSchema>

const SignInPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmitSignIn: SubmitHandler<FormValues> = (data) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
      console.log(data)
    })
  }

  return (
    <AuthFormContainer>
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
          <AuthInputField
            type='email'
            placeholder='이메일 주소를 입력해주세요.'
            register={register('email')}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <AuthInputField
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            register={register('password')}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </Stack>
        <AuthSubmitButton
          isLoading={isSubmitting}
          buttonLabel='로그인'
        />
      </Stack>
      <SignInFooterLinks navigate={navigate} />
    </AuthFormContainer>
  )
}

export default SignInPage
