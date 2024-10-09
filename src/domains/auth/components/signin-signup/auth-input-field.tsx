import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input
} from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { createSxProps } from '@/core/helper'

type AuthInputFieldProps = {
  type: string
  placeholder: string
  errorMessage?: string
  register: UseFormRegisterReturn
  isInvalid: boolean
  hasButton?: boolean
  buttonLabel?: string
  onButtonClick?: () => void
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  type,
  placeholder,
  errorMessage,
  register,
  isInvalid,
  hasButton = false,
  buttonLabel = '',
  onButtonClick
}) => {
  return (
    <FormControl
      isInvalid={isInvalid}
      isRequired>
      <Flex gap={2}>
        <Input
          type={type}
          size='lg'
          fontSize='sm'
          focusBorderColor='primary'
          errorBorderColor='red_soft'
          placeholder={placeholder}
          {...register}
        />
        {hasButton && (
          <Button
            size='lg'
            fontSize='sm'
            colorScheme='green'
            bg='green_gray'
            fontWeight='semibold'
            onClick={onButtonClick}
            sx={styles.button}>
            {buttonLabel}
          </Button>
        )}
      </Flex>
      {errorMessage && (
        <FormErrorMessage
          fontSize='xs'
          color='red_soft'>
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default AuthInputField

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
