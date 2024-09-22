import { useState } from 'react'

import { Button, Form, FormProps, Input, Typography } from 'antd'
import { appState } from 'settings/state'
import { registerResponse } from 'supporting/api'
import { RegisterDTO } from 'supporting/dto'
import { useNotification } from 'supporting/hooks/useNotification'

import { RegisterProps } from './index.types'

import * as Styled from './index.styled'

export const Register = (props: RegisterProps) => {
  const { changePageType } = props

  const [isLoading, setIsLoading] = useState(false)

  const { handleErrorNotification } = useNotification()

  const setIsAuth = appState.userState(state => state.setIsAuth)

  const onFinish: FormProps<RegisterDTO>['onFinish'] = values => {
    setIsLoading(true)
    registerResponse(values)
      .then(() => setIsAuth())
      .catch(e => handleErrorNotification(e))
      .finally(() => setIsLoading(false))
  }

  return (
    <Styled.AuthWrapper>
      <Typography.Title level={4}>Регистрация</Typography.Title>
      <Form
        name="auth"
        colon={true}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        validateTrigger="submit">
        <Form.Item<RegisterDTO>
          name="login"
          style={{ width: '50%' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой логин' },
          ]}>
          <Input placeholder="Login" />
        </Form.Item>

        <Form.Item<RegisterDTO>
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

        <Form.Item<RegisterDTO>
          name="password"
          style={{ width: '50%' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой пароль' },
          ]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item<RegisterDTO>
          name="secondPassword"
          dependencies={['password']}
          style={{ width: '50%' }}
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите свой пароль еще раз',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('Пароли не совпадают'))
              },
            }),
          ]}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item<RegisterDTO>
          name="inviteCode"
          style={{ width: '50%' }}
          rules={[
            {
              required: false,
            },
          ]}>
          <Input placeholder="Инвайт код" />
        </Form.Item>

        <Form.Item>
          <Button loading={isLoading} block type="primary" htmlType="submit">
            Зарегестрироваться
          </Button>
          Уже зарегестрированы? <a onClick={() => changePageType()}>Войти</a>
        </Form.Item>
      </Form>
    </Styled.AuthWrapper>
  )
}
