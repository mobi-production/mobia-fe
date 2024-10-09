import { Button } from '@chakra-ui/react'

import { createSxProps } from '@/core/helper'

type AuthSubmitButtonProps = {
  isLoading: boolean
  buttonLabel: string
}

const AuthSubmitButton: React.FC<AuthSubmitButtonProps> = ({
  isLoading,
  buttonLabel
}) => {
  return (
    <Button
      type='submit'
      w='100%'
      colorScheme='green'
      bg='green_gray'
      fontWeight='semibold'
      isLoading={isLoading}
      sx={styles.button}>
      {buttonLabel}
    </Button>
  )
}

export default AuthSubmitButton

const styles = createSxProps({
  button: {
    backgroundColor: 'green.500'
  }
})
