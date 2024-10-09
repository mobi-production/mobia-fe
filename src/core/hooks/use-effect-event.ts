/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

import { AnyFunction } from '../type'

const useEffectEvent = <TFunc extends AnyFunction>(func: TFunc) => {
  const funcRef = useRef(func)
  useLayoutEffect(() => {
    funcRef.current = func
  })

  const onInit = useCallback(
    (...args: Parameters<typeof func> | any) => funcRef.current(...args),
    []
  )

  useEffect(() => {
    const unmount = onInit()
    return unmount
  }, [onInit])
}
export default useEffectEvent
