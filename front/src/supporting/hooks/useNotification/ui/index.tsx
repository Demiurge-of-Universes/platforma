import { App } from 'antd'
import { ErrorResponseData } from 'supporting/types'

export const useNotification = () => {
  const { notification } = App.useApp()
  const handleNotification = () => {}

  const handleErrorNotification = (e: ErrorResponseData) => {
    const { message, detail } = e

    notification.error({
      message,
      description: detail,
      placement: 'bottomRight',
    })
  }

  return { handleNotification, handleErrorNotification }
}
