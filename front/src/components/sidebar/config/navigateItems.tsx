import { MenuProps } from 'antd'
import {
  ROUTE_HOME_PATH,
  ROUTE_COMMENT_HOME_PATH,
  ROUTE_PROFILE_HOME_PATH,
} from 'supporting/constants'
import {
  HomeOutlined,
  CommentOutlined,
  ProfileOutlined,
} from 'supporting/icons'

export const navigateItems: Required<MenuProps>['items'][number][] = [
  {
    key: ROUTE_HOME_PATH,
    label: 'Главная',
    icon: <HomeOutlined />,
  },
  {
    key: ROUTE_COMMENT_HOME_PATH,
    label: 'Сообщения',
    icon: <CommentOutlined />,
  },
  {
    key: ROUTE_PROFILE_HOME_PATH,
    label: 'Профиль',
    icon: <ProfileOutlined />,
  },
]
