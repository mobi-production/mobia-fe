import { AnyFunction } from '@/core/type'

export const DIALOG_TYPE = {
  ALERT: 'ALERT',
  CONFIRM: 'CONFIRM'
} as const

export type DialogType = keyof typeof DIALOG_TYPE

export type DialogData =
  | {
      type: typeof DIALOG_TYPE.ALERT
      onConfirm?: AnyFunction
    }
  | {
      type: typeof DIALOG_TYPE.CONFIRM
      onCancel?: AnyFunction
      onConfirm?: AnyFunction
    }
