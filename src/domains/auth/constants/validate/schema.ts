import { z } from 'zod'

import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_VALIDATION_REGEX
} from './error'

export const signInSchema = z.object({
  email: z.string().email({ message: EMAIL_ERROR_MESSAGE }),
  password: z.string().min(1, { message: '비밀번호를 입력해 주세요.' })
})

export const signUpSchema = z.object({
  email: z.string().email({ message: EMAIL_ERROR_MESSAGE }),
  password: z
    .string()
    .regex(PASSWORD_VALIDATION_REGEX, { message: PASSWORD_ERROR_MESSAGE })
})
