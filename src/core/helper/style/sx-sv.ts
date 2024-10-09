/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SystemStyleObject } from '@chakra-ui/react'

export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

export type VariantProps<Component extends (...args: any) => any> =
  Parameters<Component>[0]

type VariantShape = Record<string, Record<string, SystemStyleObject>>

type VariantSchema<V extends VariantShape> = {
  [Variant in keyof V]?: StringToBoolean<keyof V[Variant]> | undefined
}

type CompoundVariant<V extends VariantShape> = {
  [Variant in keyof V]?: StringToBoolean<keyof V[Variant]> | undefined
} & {
  style: SystemStyleObject
}

type Config<V extends VariantShape = VariantShape> = {
  base?: SystemStyleObject
  variants?: V
  defaultVariants?: VariantSchema<V>
  compoundVariants?: CompoundVariant<V>[]
}

type Props<V> = V extends VariantShape
  ? VariantSchema<V> & {
      style?: SystemStyleObject
    }
  : never

/**
 * @name sxSV
 * @description `sv`는 style-variant의 약자이며 전달되는 variant에 따라 부여되는 SxProps을
 * 쉽게 분기할 수 있도록 도와주는 함수입니다.
 *
 * @author Peanut
 * @param {Object} ({ base: SxPRops, [key]: SxProps})
 * @returns {Props<V>}
 * @example
 * const formSV  = sxSV({
 *    base: SxProps, // 인자가 undefined일 떄 기본적으로 보여되는 default-props입니다
 *    color: {
 *       red: SxProps
 *    },
 *    type: {
 *       ghost: SxProps
 *    }
 * })
 * <Box sx={formSV({color, type})}>
 */
const sxSV =
  <V extends VariantShape = VariantShape>({
    base,
    defaultVariants,
    variants,
    compoundVariants = []
  }: Config<V>) =>
  (_options?: Props<V>) => {
    const styles: SystemStyleObject = {}
    const options = _options || ({} as Props<V>)

    if (base) {
      Object.assign(styles, base)
    }

    if (defaultVariants) {
      Object.keys(defaultVariants).forEach((key) => {
        if (!options.hasOwnProperty(key) || options[key] === undefined) {
          Object.assign(options, {
            [key]: defaultVariants[key]
          })
        }
      })
    }

    Object.entries(options || {}).forEach(([category, variantSelected]) => {
      if (variants?.hasOwnProperty(category)) {
        const categoryVariants = variants[category]

        if (categoryVariants?.hasOwnProperty(String(variantSelected))) {
          Object.assign(styles, categoryVariants[String(variantSelected)])
        }
      }
    })

    compoundVariants.forEach((compound) => {
      const { style, ...compoundVariantOptions } = compound
      if (
        Object.entries(compoundVariantOptions).every(
          ([key, value]) => options[key] === value
        )
      ) {
        Object.assign(styles, style)
      }
    })

    if (options.hasOwnProperty('style')) {
      Object.assign(styles, options.style)
    }

    return styles
  }
export default sxSV
