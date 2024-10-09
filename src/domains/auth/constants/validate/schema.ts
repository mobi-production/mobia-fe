import { z } from 'zod'

import { errorMessage } from './error'
import { validation } from './validate'

export const signInSchema = z.object({
  email: z.string().email({ message: errorMessage.email }),
  password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' })
})

export const signUpSchema = z.object({
  email: z.string().email({ message: errorMessage.email }),
  password: z
    .string()
    .regex(validation.password_regex, { message: errorMessage.password })
})
