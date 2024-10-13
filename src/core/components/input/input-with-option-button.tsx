import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input
} from '@chakra-ui/react'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { createSxProps } from '@/core/helper'

type Props = {
  type: string
  placeholder: string
  errorMessage?: string
  register: UseFormRegisterReturn
  isInvalid: boolean
  hasButton?: boolean
  buttonLabel?: string
  onButtonClick?: () => void
} & InputHTMLAttributes<HTMLInputElement>

const InputWithOptionButton: React.FC<Props> = ({
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
          errorBorderColor='red.4'
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
          color='red.4'>
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default InputWithOptionButton

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
