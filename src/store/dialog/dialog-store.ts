/* eslint-disable @typescript-eslint/no-dynamic-delete */

import { create } from 'zustand'

import { dialogKey } from './key'
import type { DialogData, DialogType } from './type'

export type DialogDataType<T extends DialogType> = Extract<
  DialogData,
  { type: T }
>

export const useDialogStore = create<{
  dialogList: Record<string, DialogData>
  openDialog: (key: (typeof dialogKey)[number], data: DialogData) => void
  closeDialog: (key: (typeof dialogKey)[number]) => void
}>((set) => ({
  dialogList: {},
  openDialog: (key: (typeof dialogKey)[number], data) =>
    set((state) => ({
      dialogList: {
        ...state.dialogList,
        [key]: { ...data }
      }
    })),
  closeDialog: (key: (typeof dialogKey)[number]) =>
    set((state) => {
      const newDialogs = { ...state.dialogList }
      delete newDialogs[key]
      return {
        dialogList: newDialogs
      }
    })
}))
