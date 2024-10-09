import { SystemStyleObject } from '@chakra-ui/react'

const createSxProps = <T extends Record<string, SystemStyleObject>>(
  style: T
): T => {
  return style
}
export default createSxProps
