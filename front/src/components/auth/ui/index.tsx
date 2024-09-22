import { useState } from 'react'

import { Button, Form, FormProps, Input, Typography } from 'antd'
import { appState } from 'settings/state'
import { authResponse } from 'supporting/api'
import { AuthDTO } from 'supporting/dto'
import { useNotification } from 'supporting/hooks/useNotification'

import { AuthProps } from './index.types'

import * as Styled from './index.styled'

export const Auth = (props: AuthProps) => {
  const { changePageType } = props

  const [isLoading, setIsLoading] = useState(false)

  const { handleErrorNotification } = useNotification()

  const setIsAuth = appState.userState(state => state.setIsAuth)

  const onFinish: FormProps<AuthDTO>['onFinish'] = values => {
    setIsLoading(true)
    authResponse(values)
      .then(() => setIsAuth())
      .catch(e => handleErrorNotification(e))
      .finally(() => setIsLoading(false))
  }

  return (
    <Styled.AuthWrapper>
      <Typography.Title level={4}>Авторизация</Typography.Title>
      <Form
        name="auth"
        colon={true}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        validateTrigger="submit">
        <Form.Item<AuthDTO>
          name="login"
          style={{ width: '50%' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой логин' },
          ]}>
          <Input placeholder="Login" />
        </Form.Item>

        <Form.Item<AuthDTO>
          name="mail"
          style={{ width: '50%' }}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите свою почту/телефон',
            },
          ]}>
          <Input placeholder="Почта/телефон" />
        </Form.Item>

        <Form.Item<AuthDTO>
          name="password"
          style={{ width: '50%' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой пароль' },
          ]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item>
          <Button loading={isLoading} block type="primary" htmlType="submit">
            Войти
          </Button>
          или <a onClick={() => changePageType()}>Пройти регистрацию</a>
        </Form.Item>
      </Form>
    </Styled.AuthWrapper>
  )
}
