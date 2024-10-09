export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{10,}$/

export const PASSWORD_ERROR_MESSAGE =
  '비밀번호는 10자 이상, 대소문자, 숫자, 특수문자를 조합해야 합니다.'

export const EMAIL_ERROR_MESSAGE = '이메일 형식에 맞지 않습니다.'
