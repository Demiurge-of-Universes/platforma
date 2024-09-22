import {
  HomeOutlined,
  CommentOutlined,
  ProfileOutlined,
} from 'supporting/icons'

export const getIconForName = (name: string) => {
  switch (name) {
    case 'home':
      return <HomeOutlined />
    case 'message':
      return <CommentOutlined />
    case 'profile':
      return <ProfileOutlined />
    default:
      return null
  }
}
