import { PropsWithChildren } from 'react'

import { useDialogStore } from '@/store/dialog/dialog-store'

const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dialogList = useDialogStore((s) => s.dialogList)

  return (
    <>
      {Object.entries(dialogList).map(([key, data]) => {
        switch (data.type) {
          case 'ALERT':
            return (
              <div
                key={key}
                {...data}>
                alert
              </div>
            )
          case 'CONFIRM':
            return (
              <div
                key={key}
                {...data}>
                confirm
              </div>
            )
          default:
            return <></>
        }
      })}
      {children}
    </>
  )
}
export default DialogProvider
